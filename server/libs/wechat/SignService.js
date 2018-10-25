/**
 *  Signature.js
 *  Create By rehellinen
 *  Create On 2018/9/27 15:44
 */
import {TicketService} from './TicketService'
import {getRandChars} from '../../../utils/utils'
import sha1 from 'sha1'
import config from '../../../utils/config'

let ticketIns = new TicketService()

export class SignService {
  constructor (url) {
    this.url = url
  }

  async sign () {
    let ticket = await ticketIns.get()

    let obj = {
      jsapi_ticket: ticket,
      noncestr: getRandChars(),
      timestamp: parseInt(new Date().getTime() / 1000).toString(),
      url: this.url
    }

    let rawStr = this.getRawStr(obj)

    return {
      appId: config.WECHAT.APP_ID,
      timestamp: obj.timestamp,
      nonceStr: obj.noncestr,
      signature: sha1(rawStr)
    }
  }

  getRawStr (obj) {
    let keys = Object.keys(obj)
    let newObj = {}
    let str = ''

    keys = keys.sort()
    keys.forEach(key => {
      newObj[key] = obj[key]
    })

    for (let k in newObj) {
      str += `&${k}=${newObj[k]}`
    }

    return str.substr(1)
  }
}
