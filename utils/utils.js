/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2018/9/26 10:21
 */
import xml2js from 'xml2js'

function parseXML(xml) {
  return new Promise(((resolve, reject) => {
    xml2js.parseString(xml, {
      trim: true
    }, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  }))
}

export {parseXML}
