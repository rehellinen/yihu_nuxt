<template>
  <section class="container">
    <div>
      <logo/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {mapState} from 'vuex'

export default {
  components: {
    Logo
  },
  beforeMount () {
    const wx = window.wx
    const url = window.location.href
    console.log(this.$store)
    this.$store.dispatch('getWechatSignature', url).then(res => {
      if (res.data.success) {
        const params = res.data.params

        wx.config({
          debug: true,
          appId: params.appId,
          timestamp: params.timestamp,
          nonceStr: params.noncestr,
          signature: params.signature,
          jsApiList: [
            'chooseWXPay',
            'previewImage'
          ]
        })

        wx.ready(() => {

        })
      }
    })
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
