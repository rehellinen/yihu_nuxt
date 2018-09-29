<template lang="pug">
  .loading-container
    .spinner
      .rect1
      .rect2
      .rect3
      .rect4
      .rect5
    p 加载中
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import "~static/sass/base"

.loading-container
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  color: $base-font-color
  letter-spacing: 3px
  font-size: 16px


  .spinner
    margin-bottom: 30px
    width: 100px
    height: 30px
    text-align: center
    font-size: 10px

    > div
      background-color: $base-font-color
      height: 100%
      width: 5px
      margin: 1px
      display: inline-block
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out
      animation: stretchdelay 1.2s infinite ease-in-out

    .rect2
      -webkit-animation-delay: -1.1s
      animation-delay: -1.1s

    .rect3
      -webkit-animation-delay: -1.0s
      animation-delay: -1.0s

    .rect4
      -webkit-animation-delay: -0.9s
      animation-delay: -0.9s

    .rect5
      -webkit-animation-delay: -0.8s
      animation-delay: -0.8s

    @-webkit-keyframes stretchdelay
      0%, 40%, 100%
        -webkit-transform: scaleY(0.4)
      20%
        -webkit-transform: scaleY(1.0)

    @keyframes stretchdelay
      0%, 40%, 100%
        transform: scaleY(0.4)
        -webkit-transform: scaleY(0.4)
      20%
        transform: scaleY(1.0)
        -webkit-transform: scaleY(1.0)
</style>
