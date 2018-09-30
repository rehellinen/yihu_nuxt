<template lang='pug'>
  .container
    .loading(v-if='token')
      loading
    .loaded(v-else)
      // 标题
      title-panel(title='功能开通')
      .status.card
        div
          p.function 商家推送功能
          p.status-text 未开通
      // 表单
      .form-container.card
        form()
          .section
            p 学号：
            input(name='name' class='form_input' v-model='userInfo.number')
          .section
            p 手机：
            input(name='telephone' class='form_input' v-model='userInfo.telephone')
          .section
            p 类型：
            div
              p.active 自营商家
              p 二手卖家
          .button(@click='submit')
            p 确定
</template>

<script>
import {Token} from '../client/utils/Token'
import TitlePanel from '../components/title-panel'
import Loading from '../components/loading'
import {mapActions, mapGetters} from 'vuex'

let token = new Token()

export default {
  components: {
    TitlePanel,
    Loading
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'token'
    ])
  },
  async mounted () {
    let code = this.$router.history.current.query.code

    // 获取token
    // await this.getToken(code)
    // 获取用户信息
    // this.getUserInfo()
  },
  methods: {
    ...mapActions([
      'getUserInfo',
      'getToken'
    ])
  },
}
</script>

<style lang='sass'>
  @import '~static/sass/base'

  .status
    padding: 10px 20px
    color: $grey-font-color
    div
      display: flex
      justify-content: space-between
      align-items: center
      .function
        font-size: $big-font-size
      .status-text
        font-size: $small-font-size

  .form-container
    margin-top: 10px
    color: $grey-font-color
    padding: 5px 0 15px 0
    .section
      display: flex
      margin: 10px 20px
      align-items: center
      height: 40px
      p
        flex-basis: 25%
      input
        flex-basis: 75%
        box-sizing: border-box
        text-align: center
        font-size: $normal-font-size
        height: 35px
        border-radius: 4px
        border: 1px solid $light-font-color
        color: $base-font-color
        -webkit-appearance: none
        -moz-appearance: none
        display: block
        outline: 0
        padding: 0 1px
        text-decoration: none
      div
        display: flex
        justify-content: space-around
        align-items: center
        flex-basis: 75%
        p
          font-size: $small-font-size
        .active
          color: #ff4500
          font-weight: bold
    .button
      background-color: #999999
      color: white
      text-align: center
      padding: 5px 0
      border-radius: 5px
      margin: 25px 20px 0 20px
</style>
