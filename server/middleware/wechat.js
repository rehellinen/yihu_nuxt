/**
 *  wechat.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:01
 */
import sha1 from 'sha1'
import config from '../utils/config'
import getRawBody from 'raw-body'
import {parseXML, formatMessage} from '../utils/utils'
import {Template} from "../libs/Template"

export default function (opts, reply) {
  return async function wechatMiddle(ctx, next) {
    const token = config.wechat.token
    const {signature, timestamp, nonce, echostr} = ctx.query
    const str = [token, timestamp, nonce].sort().join('')
    const shaRes = sha1(str)

    // 处理微信url验证
    if (ctx.method === 'GET') {
      shaRes === signature ? ctx.body = echostr : ctx.body = 'fail'
    }

    // 处理公众号自动回复等功能
    if (ctx.method === 'POST') {
      if (shaRes !== signature) {
        ctx.body = 'fail'
        return
      }

      const reqDataXml = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })
      const content = parseXML(reqDataXml)
      ctx.weixin = formatMessage(content.xml)
      await reply.apply(ctx, [ctx, next])


      const xml = new Template(ctx.weixin).get()
      ctx.type = 'application/xml'
      ctx.body = xml
    }
  }
}
