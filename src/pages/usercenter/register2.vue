<template>
    <ul class="register2">
      <li @click="handlecomeback">
        我是返回键
      </li>
      <li>
        手机号
        <input placeholder="请输入您的手机号" type="text" v-model="phonenuber">
      </li>
      <li>
        图片验证码
        <input placeholder="图片验证码中的内容" type="text">
        <span>
          DEFT
        </span>
      </li>
      <li>
        验证码
        <input v-model="code" placeholder="请输入您的短信验证码" type="text">
        <span @click="sendCode">
          获取短信验证码
        </span>
      </li>
      <li>
        设置你的用户名/昵称
        <input placeholder="请输入您的用户名" type="text">
      </li>
      <li>
        密码
        <input placeholder="请输入您密码" type="text">
      </li>
      <li>
        确认密码
        <input placeholder="请您确认密码" type="text">
      </li>
      <li @click="login" class="register2nextpage">
        下一步(登录)
      </li>
      <li>登陆状态: {{status}}</li>
    </ul>
</template>

<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        phonenuber: '',
        code: '',
        status: '未登陆'
      }
    },
    mounted () {
     this.phonenuber = this.register.phonenumber
    },
    computed: {
      ...mapState(['register'])
    },
    methods: {
      handlecomeback () {
        this.$router.go(-1)
      },
      sendCode() {
        const url = `/sendcode?phone=${this.phonenuber}`
        axios.get(url).then(response => {
          console.log('sendcode result ', response.data)
        })
      },

      login() {
        axios.post('/login', {phone: this.phonenuber, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            this.status = `登陆成功: ${user.phone}`
          } else {
            this.status = `登陆失败, 请输入正确的手机号和验证码`
          }
        })
      }
    },
    watch: {
      status (newstate, oldstate) {
        console.log(newstate, oldstate)
        if (newstate.length > 7){
          this.$router.push('/loginsuccess')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.register2
  width 100%
  height 100%
  background lightyellow
  &>li
    height 50px
    width 100%
    display flex
    justify-content space-around
    align-items center
    &>input
      height 20px
      width 60%

  .register2nextpage
    height 30px
    width 100%
    background yellow
    display flex
    justify-content center
    align-items center
    border-radius 10px
</style>
