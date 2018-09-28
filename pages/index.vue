<template>
  <section class="container">
    <div>
      <p>加载中 ... </p>
    </div>
  </section>
</template>

<script>
import config from '../utils/config'

export default {
  created () {
    let url = encodeURIComponent(`${config.restUrl}/bind`)
    window.location.href = `${config.apiUrl.code}?appid=${config.wechat.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base#wechat_redirect`
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
