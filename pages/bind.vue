<template lang="pug">
  .container
    // 标题
    title-panel(title="功能开通")
    .status.card
      div
        p.function 商家推送功能
        p.status-text 未开通
    // 表单
    .form-container.card
      form()
        .section
          p 学号：
          input(name="name" class="form_input")
        .section
          p 手机号：
          input(name="telephone" class="form_input")
        .button
          p 确定
</template>

<script>
import config from '../utils/config'
import {Token} from '../client/utils/Token'
import TitlePanel from '../components/title-panel'
import {mapActions, mapGetters} from 'vuex'

let token = new Token()

export default {
  components: {
    TitlePanel
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  beforeCreate () {
    // 获取token
    this.code = this.$router.history.current.query.code
    token.verify(this.code)
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  },
}
</script>

<style lang="sass">
  @import "~static/sass/base"

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
      p
        flex-basis: 30%
      input
        box-sizing: border-box
        text-align: center
        font-size: $normal-font-size
        height: 35px
        border-radius: 4px
        border: 1px solid $light-font-color
        color: $base-font-color
        -web-kit-appearance: none
        -moz-appearance: none
        display: block
        outline: 0
        padding: 0 1px
        text-decoration: none
        width: 100%
    .button
      background-color: #999999
      color: white
      text-align: center
      padding: 5px 0
      border-radius: 5px
      margin: 25px 20px 0px 20px
</style>
