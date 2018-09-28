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
    let code = this.$router.history.current.query.code
    if (!code) {
      let url = encodeURIComponent(`${config.restUrl}/bind`)
      window.location.href = `${config.apiUrl.code}?appid=${config.wechat.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base#wechat_redirect`
    }
    // 获取token
    await token.get(code)
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
