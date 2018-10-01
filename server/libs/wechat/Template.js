/**
 *  template.js
 *  Create By rehellinen
 *  Create On 2018/9/26 20:07
 */
import X2JS from 'x2js'
let x2js = new X2JS({
  escapeMode: false
})

/**
 * 根据type返回不同的xml
 */
export class Template {
  constructor (data) {
    this.data = data
    if (!data.content) {
      data.content = '暂无更多~'
    }
    this.info = {
      ToUserName: `<![CDATA[${data.FromUserName}]]>`,
      FromUserName: `<![CDATA[${data.ToUserName}]]>`,
      CreateTime: new Date().getTime(),
    }
  }

  get () {
    let type = 'text'
    let data = this.data

    this.info['Content'] = `<![CDATA[${data.content}]]>`
    this.info['MsgType'] = `<![CDATA[${type}]]>`

    let rawXml = x2js.js2xml(this.info)
    return `<xml>${rawXml}</xml>`
  }
}
