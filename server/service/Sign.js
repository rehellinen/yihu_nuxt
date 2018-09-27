/**
 *  Signature.js
 *  Create By rehellinen
 *  Create On 2018/9/27 15:44
 */
import {AccessToken} from './AccessToken'
import {Ticket} from './Ticket'
import {getRandChars} from '../utils/utils'
import sha1 from 'sha1'

export class Sign {
  constructor () {
    let ticket = new Ticket()
    this.accessToken = new AccessToken().get()
    this.ticket = ticket.get()
    this.url = ticket.getUrl()
  }

  sign () {
    let obj = {
      jsapi_ticket: this.ticket,
      noncestr: getRandChars(),
      timestamp: parseInt(new Date().getTime() / 1000),
      url: this.url
    }

    let rawStr = this.getRawStr(obj)
    return sha1(rawStr)
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
