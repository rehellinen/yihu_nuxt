/**
 *  Reply.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:12
 */
import config from '../../utils/config'
let {MSG_TYPE, EVENT_TYPE} = config
const tip = '爱你哟~'

export default (ctx) => {
  ctx.wechat.content = tip
  let wechat = ctx.wechat

  if (wechat.MsgType === MSG_TYPE.TEXT) {
    // 文本消息
    wechat.content = tip
  } else if (wechat.MsgType === MSG_TYPE.EVENT) {
    // 事件
    if (wechat.Event === EVENT_TYPE.SUBSCRIBE) {
      wechat.content = '欢迎关注我们~'
    } else if (wechat.Event === EVENT_TYPE.UNSUBSCRIBE) {
      // TODO: 用户取消关注
    }
  }
}
