<template lang='pug'>
  .container
    modal(ref="modal")
    .loading(v-if='!token')
      loading
    .loaded(v-else)
      // 标题
      title-panel(title='功能开通')
      .status.card
        div
          p.function 商家推送功能
          p.status-text {{userInfo.is_push === 1 ? '已开通' : '未开通'}}
        p.detail 由于微信限制，商家需要在此页面 绑定相关信息才能收到推送（用户下单等）。其中学号和手机号需与注册易乎商家版时的信息保持一致。
      // 表单
      .form-container.card(v-if="!userInfo.is_push")
        form()
          .section
            p 学号：
            input(name='name' class='form_input' v-model='number')
          .section
            p 手机：
            input(name='telephone' class='form_input' v-model='telephone')
          .section
            p 类型：
            div
              p(@click="selectType(goodsType.NEW)" :class="{active: type === goodsType.NEW}") 自营商家
              p(@click="selectType(goodsType.OLD)" :class="{active: type === goodsType.OLD}") 二手卖家
          .button(@click='submit')
            p 确定
</template>

<script>
import {Token} from '../client/utils/Token'
import TitlePanel from '../components/title-panel'
import Loading from '../components/loading'
import Modal from '../components/modal'
import {mapActions, mapGetters} from 'vuex'
import config from '../utils/config'
import {AccountModel} from "../client/model/AccountModel"

let account = new AccountModel()

let token = new Token()

export default {
  head () {
    return {
      title: '校园易乎'
    }
  },
  components: {
    TitlePanel,
    Loading,
    Modal
  },
  data () {
    return {
      number: '',
      telephone: '',
      type: config.goodsType.NEW,
      goodsType: config.goodsType
    }
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
    await this.getToken(code)
    // 获取用户信息
    this.getUserInfo()
  },
  methods: {
    selectType (type) {
      this.type = type
    },
    async submit () {
      let data = {
        telephone: this.telephone,
        number: this.number,
        type: this.type
      }
      const res = await account.openPush(data)
      if (res.status !== 1) {
        this.$refs.modal.change({
          isShow: true,
          title: '提示',
          content: '开通失败'
        })
      } else {
        this.$refs.modal.change({
          isShow: true,
          title: '提示',
          content: '开通成功'
        })
        this.getUserInfo()
      }
    },
    ...mapActions([
      'getUserInfo',
      'getToken',
      'openPush'
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
      border-bottom: 1px solid $light-font-color
      padding-bottom: 10px
      margin-bottom: 10px
      .function
        font-size: $big-font-size
      .status-text
        font-size: $small-font-size
    .detail
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
        flex-basis: 23%
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
          white-space: nowrap
        .active
          color: #ff4500
          font-weight: bold
    .button
      background-color: #999999
      color: white
      text-align: center
      padding: 5px 0
      border-radius: 5px
      margin: 15px 20px 0 20px
</style>
