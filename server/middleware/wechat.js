/**
 *  wechat.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:01
 */
import sha1 from 'sha1'
import config from '../../utils/config'
import getRawBody from 'raw-body'
import {parseXML, formatMessage, template} from '../../utils/utils'

export default function (opts, reply) {
  return async function wechatMiddle(ctx, next) {
    const token = config.wechat.token
    const {signature, timestamp, nonce, echostr} = ctx.query

    const str = [token, timestamp, nonce].sort().join('')
    const shaRes = sha1(str)

    if (ctx.method === 'GET') {
      // 处理微信url验证
      if (shaRes === signature) {
        ctx.body = echostr
      } else {
        ctx.body = 'fail'
      }
    } else if (ctx.method === 'POST') {
      // 处理公众号自动回复等功能
      if (shaRes !== signature) {
        ctx.body = 'fail'
        return false
      }

      const reqDataXml = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })

      const content = parseXML(reqDataXml)
      ctx.weixin = formatMessage(content.xml)
      await reply.apply(ctx, [ctx, next])
      const replyBody = ctx.body

      // 获取响应xml
      const xml = template(replyBody, ctx.weixin)

      ctx.type = 'application/xml'
      ctx.body = xml
    }
  }
}
