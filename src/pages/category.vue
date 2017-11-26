<template>
    <div class="wrapkk">
      <div class="taps">
        <div class="taps1">
          <router-link to="/category/tab1">分类</router-link>
        </div>
        <div class="taps2">
          <router-link to="/category/tab2">品牌</router-link>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('getMyclass', () => {

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapkk
  position absolute
  width 100%
  height 100%
  /*background lightyellow*/
  .taps
    box-sizing border-box
    padding 0 70px
    display flex
    justify-content space-around
    width 100%
    height 40px
    border-bottom 3px solid lightgray
    .taps1,.taps2
      height 100%
      width 20%
      a
        justify-content center
        align-items center
        display flex
        height 100%
        width 100%
      .router-link-active
        color red
        border-bottom solid 3px red
  .content
    position absolute
    top 40px
    left 0px
    right 0px
    bottom 45px
</style>
