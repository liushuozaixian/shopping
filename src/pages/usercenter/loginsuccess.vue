<template>
    <div class="loginaa">
      <div class="daojishi">
        <span class="ziti">{{number}}</span>
        <span>秒钟后返回主页面</span>
      </div>
      恭喜您登录成功
    </div>
</template>

<script>
    export default {
      data () {
        return {
          number: 10
        }
      },
      mounted () {
       this.tt = setInterval(() => {
         this.number--
         console.log(this.number)
         if (this.number == 0){
           clearInterval(this.tt)
           this.$router.push('/main')
           this.$store.dispatch('isShowGfoodnavy',true)
         }
       },1000)
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginaa
    position absolute
    display flex
    justify-content space-around
    align-items center
    flex-direction column
    height 100%
    width 100%
    background yellow
    font-size 27px
    .daojishi
      display flex
      justify-content space-around
      align-items center
      flex-direction column
      background #d3d3d3
      font-size 25px
      .ziti
        font-size 60px
</style>
