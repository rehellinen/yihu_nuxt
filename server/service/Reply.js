/**
 *  Reply.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:12
 */
import config from '../utils/config'
let {msgType} = config
const tip = '爱你哟~1111'

export default async (ctx, next) => {
  ctx.weixin.content = tip
  let weixin = ctx.weixin

  // 文本消息
  if (weixin.MsgType === msgType.TEXT) {
    weixin.content = tip
  } else if (weixin.MsgType === msgType.EVENT) {
    if (weixin.Event === 'subscribe') {
      
    }
  }
}
