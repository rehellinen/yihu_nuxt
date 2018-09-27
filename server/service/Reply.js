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


  if (weixin.MsgType === msgType.TEXT) {
    // 文本消息
    weixin.content = tip
  } else if (weixin.MsgType === msgType.EVENT) {
    // 事件
    if (weixin.Event === 'subscribe') {
      weixin.content = '欢迎关注我们~'
    } else if (weixin.Event === 'unsubscribe') {

    }
  }
}
