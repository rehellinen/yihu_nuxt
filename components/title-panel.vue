<template lang="pug">
  div.panel-container
    img(:src="image")
    div
      p {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/image/icon/bind.png'
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~static/sass/base"
  .panel-container
    width: 100%
    background-color: white
    height: 75px
    display: flex
    align-items: center
    justify-content: space-between
    img
      width: 35px
      height: 35px
      margin-left: 25px
    div
      flex: 1
      text-align: center
    p
      color: $deep-font-color
      font-size: $bigger-font-size
      letter-spacing: 2px
</style>
