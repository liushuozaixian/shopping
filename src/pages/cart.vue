<template>
    <div class="wrap2222">
      <div class="navy">
        <span @click="handleback"><</span>
        <span>购物车</span>
        <span @click="handleclick" ref="daohang">导航</span>
      </div>
      <div class="cartwrap">
        <transition name="fade">
          <ul v-show="isShow"  class="logos">
            <li>首页</li>
            <li>分类</li>
            <li>购车</li>
            <li>用户</li>
          </ul>
        </transition>
        <div class="changes">
          <div class="changescart">
            <div class="changescartcollection">去逛逛</div>
            <div class="changescartbuy">我的收藏</div>
          </div>
          <div class="changesulwrap">
            <ul class="changesul">
              <li class="changesulli">已经买到的东西删除或是添加数量的功能</li>
              <li class="changesulli">已经买到的东西删除或是添加数量的功能</li>
              <li class="changesulli">已经买到的东西删除或是添加数量的功能</li>
              <li class="changesulli">已经买到的东西删除或是添加数量的功能</li>
              <li class="changesulli">已经买到的东西删除或是添加数量的功能</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
          return {
            isShow: false
          }
      },
      methods:{
        handleback () {
          this.$router.go(-1)
        },
        handleclick () {
          this.isShow = !this.isShow
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap2222
    width 100%
    .navy
      z-index 1
      background white
      width 100%
      position relative
      height 45px
      box-sizing border-box
      padding 0 10px
      font-size 18px
      color #fffff
      display flex
      align-items center
      justify-content space-between
      &:after
        content ''
        position absolute
        width 100%
        height 1px
        background black
        left 0px
        bottom 0px
        transform scaleY(0.2)
      span
        height 100%
        display flex
        justify-content center
        align-items center
    .cartwrap
      width 100%
      .logos
        position relative
        width 100%
        display flex
        justify-content space-around
        align-items center
        height 45px
        &.fade-enter,&.fade-leave-to
          transform translateY(-45px);
        &.fade-enter-active,&.fade-leave-active
          transition all .8s ease;
        &:after
          content ''
          position absolute
          width 100%
          height 1px
          background black
          left 0px
          bottom 0px
          transform scaleY(0.1)
        li
          height 100%
          width 20%
          display flex
          justify-content center
          align-items center
          font-size 18px
          color #fffff

      .changes
        width 100%
        .changescart
          display flex
          width 100%
          height 300px
          justify-content center
          align-items center
          div
            width 20%
            height 30px
            display flex
            justify-content center
            align-items center
            border-radius 10px
            border solid 1px black
            margin-right 9px


        .changesulwrap
          width 100%
          height 500px
          background lightgray
          .changesul
            display flex
            justify-content center
            flex-direction column
            width 100%
            .changesulli
              display flex
              justify-content center
              align-items center
              margin-bottom 3px
              width 100%
              height 30px
              background palegoldenrod


</style>
