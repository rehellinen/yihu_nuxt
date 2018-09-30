<template lang="pug">
  div.panel-container
    img(:src="image")
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
    justify-content: center
    img
      width: 25px
      height: 25px
      margin-right: 25px
    p
      color: $deep-font-color
      font-size: $biggest-font-size
      letter-spacing: 4px
</style>
