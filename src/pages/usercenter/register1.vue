<template>
    <div class="register1">
      <div @click="handlecomeback" class="register1header">
        我是返回键
      </div>
      <div class="register1input">
        <input placeholder="请输入您的手机号11位变色！！" type="text" v-model="phonenumber">
        <span :class="{active: phonenumber.length > 0}" @click="handlenext" class="register1inputspan">
          下一步
        </span>
      </div>
    </div>
</template>

<script>
  import PubSub from 'pubsub-js'
    export default {
      data () {
        return {
          phonenumber: ''
        }
      },
      methods: {

        handlecomeback () {
          this.$router.go(-1)
        },
        handlenext () {
          if (this.phonenumber.length == 11 && (/^1(3|4|5|7|8)\d{9}$/.test(this.phonenumber))){
            this.$router.push('/register2')
            this.$store.dispatch('register', this.phonenumber)
//            PubSub.publish( 'phonenumber', this.phonenumber )
          }else {
              alert('请输入正确的手机号码')

          }

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.register1
  width 100%
  height 100%
  background lightyellow
  .register1header
    height 40px
    width 100%
    display flex
    justify-content center
    align-items center
    font-size 20px
  .register1input
    height 100px
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    &>input
      height 30px
      width 80%
    .register1inputspan
      width 20%
      height 50%
      display flex
      justify-content center
      align-items center
      background gold
    .active
      background #f00
</style>
