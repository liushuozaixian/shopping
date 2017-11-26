<template>
    <div>
      <router-view></router-view>
      <div v-show="isShowG.foodnavy" class="mainfooter">
        <div class="footerwrap">
          <div class="footerwrap-1 footerwrap-G ">
            <router-link to="/main">首页</router-link>
          </div>
          <div class="footerwrap-2 footerwrap-G">
            <router-link to="/category">分类</router-link>
          </div>
          <div class="footerwrap-3 footerwrap-G">
            <router-link to="/cart">购物</router-link>
          </div>
          <div @click="handlehidden(false)" class="footerwrap-4 footerwrap-G">
            <router-link to="/usercenter">用户</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods: {
      handlehidden (bool) {
        this.$store.dispatch('isShowGfoodnavy',bool)
      }
    },
    computed: {
      ...mapState(['isShowG'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mainfooter
  position fixed
  z-index 1
  width 100%
  height 45px
  bottom 0
  left 0
  .footerwrap
    position: fixed
    width 100%
    height 45px
    background #3333
    bottom 0
    left 0
    display flex
    font-size 23px
    align-items center
    justify-content space-around
    .footerwrap-G
      width 25%
      height 100%
      display flex
      justify-content space-around
      align-items center
      &>a
        height 100%
        width 100%
        display flex
        justify-content center
        align-items center
      .router-link-active
        background #233
        height 100%
        width 100%
        display flex
        align-items center
        justify-content space-around
</style>
