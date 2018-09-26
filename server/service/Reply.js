/**
 *  Reply.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:12
 */
const tip = '爱你哟~'

export default async (ctx, next) => {
  const message = ctx.weixin
  console.log(message)
  ctx.body = tip
}
