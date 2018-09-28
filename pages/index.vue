<template>
  <section class="container">
    <div>
      <p>123</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
import config from '../server/utils/config'

export default {
  computed: {
    ...mapGetters([
      'signature'
    ])
  },
  async beforeMount () {
    console.log(this.$router.params)
    if (!this.$router.params) {
      let url = encodeURIComponent(`${config.restUrl}/bind`)
      window.location.href = `${config.apiUrl.code}?appid=${config.wechat.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base#wechat_redirect`
    }
  },
  methods: {
    async getWxApi () {
      const wx = window.wx
      const url = window.location.href
      // 获取签名
      await this.getWechatSignature(url)

      // 微信认证
      let signature = this.signature
      wx.config({
        debug: true,
        appId: signature.appId,
        timestamp: signature.timestamp,
        nonceStr: signature.nonceStr,
        signature: signature.signature,
        jsApiList: [
          'chooseWXPay',
          'previewImage'
        ]
      })
    },
    ...mapActions([
      'getWechatSignature'
    ])
  }
}
</script>

<style>

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
