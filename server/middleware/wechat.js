/**
 *  wechat.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:01
 */
import sha1 from 'sha1'
import config from '../../utils/config'
import getRawBody from 'raw-body'
import {parseXML} from '../../utils/utils'

export default function (opts, reply) {
  return async function wecharMiddle(ctx, next) {
    const token = config.wechat.token
    const {signature, timestamp, nonce, echostr} = ctx.query

    const str = [token, timestamp, nonce].sort().join('')
    const shaRes = sha1(str)

    if (ctx.method === 'GET') {
      if (shaRes === signature) {
        ctx.body = echostr
      } else {
        ctx.body = 'fail'
      }
    } else if (ctx.method === 'POST') {
      if (shaRes !== signature) {
        ctx.body = 'fail'
        return false
      }

      const data = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })

      const content = await parseXML(data)
      console.log(content)

      // const message = util.formatMessage(content.xml)

      ctx.weixin = {}

      await reply.apply(ctx, [ctx, next])
      const replyBody = ctx.body
      const msg = ctx.weixin
      // const xml = util.tpl(replyBody, msg)
      console.log(replyBody)

      const xml = `<xml> <ToUserName>< ![CDATA[toUser] ]></ToUserName> <FromUserName>< ![CDATA[fromUser] ]></FromUserName> <CreateTime>12345678</CreateTime> <MsgType>< ![CDATA[text] ]></MsgType> <Content>< ![CDATA[你好] ]></Content> </xml>`

      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = xml
    }
  }
}
