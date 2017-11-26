<template>
    <div class="dogfoot" ref="selltitle">
      <div class="dogfoot1" ref="dogfoot1" ></div>
      <div class="dogfoot2">{{selltitle}}</div>
      <div class="dogfoot1" ref="dogfoot3"></div>
    </div>
</template>

<script>
    export default {
      props: ['selltitle','selltitlecolor'],
      data () {
          return {

          }
      },
      mounted () {
        this.$refs.selltitle.style.color=this.selltitlecolor
        this.$refs.dogfoot1.style.background=this.selltitlecolor
        this.$refs.dogfoot3.style.background=this.selltitlecolor
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dogfoot
  width 100%
  height 40px
  background pink
  box-sizing border-box
  padding 0 50px
  display flex
  justify-content space-around
  align-items center
  font-size 20px
  .dogfoot1
    width 60px
    height 2px
</style>
