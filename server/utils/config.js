/**
 *  config.js
 *  Create By rehellinen
 *  Create On 2018/9/24 16:05
 */
const baseUrl = 'https://api.weixin.qq.com/cgi-bin'
export default {
  // restUrl: 'http://127.0.0.1:3000',
  restUrl: 'http://yihu.rehellinen.cn',

  // 微信公众号相关
  wechat: {
    token: 'chengshiaicaijing',
    appId: 'wx825597122d348385',
    appSecret: '637ced82aa3d12a4912c46f7e95ddbcf'
  },

  // 数据库配置
  database: {
    host: 'gz-cdb-jhpbcl86.sql.tencentcdb.com',
    port: 63094,
    user: 'root',
    password: 'shun122526',
    database: 'flea_market',
    charset: 'utf8'
  },

  // 微信api
  apiUrl: {
    accessToken: `${baseUrl}/token`,
    ticket: `${baseUrl}/ticket/getticket`,
    code: `https://open.weixin.qq.com/connect/oauth2/authorize`
  },

  msgType: {
    TEXT: 'text',
    EVENT: 'event'
  },

  eventType: {
    SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe'
  },

  materialType: {

  },

  tokenType: {
    ACCESS_TOKEN: 'access_token',
    TICKET: 'ticket'
  }
}
