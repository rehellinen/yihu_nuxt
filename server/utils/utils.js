/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:21
 */
import X2JS from 'x2js'
let x2js = new X2JS({
  escapeMode: false
})

function parseXML (xml) {
  return x2js.xml2js(xml.toString())
}

function formatMessage (data) {
  let msg = {}
  if (typeof data !== 'object') {
    return
  }

  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    let key  = keys[i]
    let item = data[key]

    if (typeof item === 'string') {
      msg[key] = item
    }

    if (item instanceof Array) {
      // 数组不止一项
      msg[key] = []
      for (let j =  0; j < item.length; j++) {
        msg[key].push(formatMessage(item[j]))
      }
    }
  }
  return msg
}

export {parseXML, formatMessage}
