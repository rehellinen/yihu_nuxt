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
  }

  get () {
    let type = 'text'
    let data = this.data

    if (!this.data.content) {

    }
    let info = Object.assign({}, {
      ToUserName: `<![CDATA[${data.FromUserName}]]>`,
      FromUserName: `<![CDATA[${data.ToUserName}]]>`,
      CreateTime: new Date().getTime(),
      MsgType: `<![CDATA[${type}]]>`,
      Content: `<![CDATA[${data.content}]]>`
    })
    let rawXml = x2js.js2xml(info)
    return `<xml>${rawXml}</xml>`
  }
}
