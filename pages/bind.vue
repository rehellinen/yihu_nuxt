<template>
  <section class="container">
    <div>
      <p>bind</p>
    </div>
  </section>
</template>

<script>
import config from '../utils/config'
import {Token} from '../client/utils/Token'

let token = new Token()

export default {
  async mounted () {
    // 没有code时重新跳转
    let code = this.$router.history.current.query.code
    if (!code) {
      let url = encodeURIComponent(`${config.restUrl}/bind`)
      window.location.href = `${config.apiUrl.code}?appid=${config.wechat.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base#wechat_redirect`
    }
    // 获取token
    await token.verify(code)
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
</style>
