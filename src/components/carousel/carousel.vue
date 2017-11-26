<template>
    <div class="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in index1" :key="index">
          <a :href="item.target.param">
            <img v-lazy="item.image"  alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      computed : {
        ...mapGetters(['index1'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.carousel
  background lightyellow
  width 100%
  height 200px
  a
    width 100%
    height 100%
    img
      width 100%
      height 100%
</style>
