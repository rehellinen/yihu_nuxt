<template lang="pug">
  div
    div.modal-container(v-show="isShow")
      div.shadow
      div.modal
        div.title
          p {{title}}
        div.content
          p {{content}}
        div.button
          div.confirm(@click="confirm")
            p 确定
</template>

<script>
  export default {
    data () {
      return {
        isShow: false,
        title: '标题君已下线',
        content: '内容君已下线'
      }
    },
    methods: {
      confirm () {
        this.change({
          isShow: false
        })
      },
      change (config = {}) {
        if (config.hasOwnProperty('isShow')) {
          this.isShow = config.isShow
        }
        if (config.hasOwnProperty('title')) {
          this.title = config.title
        }
        if (config.hasOwnProperty('content')) {
          this.content = config.content
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~static/sass/base'

  .modal-container
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    width: 100vw
    color: white
    .shadow
      background-color: black
      opacity: 0.2
      width: 100%
      height: 100%
      position: absolute
      z-index: 10
    .modal
      display: flex
      flex-direction: column
      justify-content: space-between
      background-color: white
      width: 80%
      height: 27%
      color: $base-font-color
      border-radius: 10px
      z-index: 20
      .title
        display: flex
        border-radius: 10px 10px 0 0
        justify-content: center
        align-items: center
        height: 28%
        background-color: #F8F8F8
      .content
        flex: 1
        margin: 10px 20px
      .button
        display: flex
        align-items: center
        justify-content: flex-end
        .confirm
          display: flex
          align-items: center
          justify-content: center
          width: 65px
          height: 35px
          background-color: #1E9FFF
          color: white
          margin: 15px 20px
          border-radius: 5px
</style>
