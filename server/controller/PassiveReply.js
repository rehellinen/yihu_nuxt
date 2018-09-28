/**
 *  公众号被动回复api
 *  Reply.js
 *  Create By rehellinen
 *  Create On 2018/9/27 16:59
 */
import sha1 from 'sha1'
import config from '../utils/config'
import getRawBody from 'raw-body'
import {parseXML, formatMessage} from '../utils/utils'
import {Template} from '../libs/Template'
import reply from '../service/Reply'
import fs from 'fs'
import {promisify} from 'util'
import {resolve} from 'path'
import {types} from '../utils/mime'

const readAsync = promisify(fs.readFile)

export class PassiveReply {
  static wechat () {
    return async (ctx, next) => {
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

        // req 相关
        const reqDataXml = await getRawBody(ctx.req, {
          length: ctx.length,
          limit: '1mb',
          encoding: ctx.charset
        })
        const content = parseXML(reqDataXml)
        ctx.weixin = formatMessage(content.xml)
        await reply.apply(ctx, [ctx, next])

        // res 相关
        const xml = new Template(ctx.weixin).get()
        ctx.type = types.xml
        ctx.body = xml
      }
    }
  }

  static file () {
    return async (ctx, next) => {
      const data = await readAsync(resolve(__dirname, '../files/MP_verify_bTR3G8h36rV3qShu.txt'))
      ctx.type = types.txt
      ctx.body = data.toString()
    }
  }
}
