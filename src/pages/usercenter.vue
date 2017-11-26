<template>
  <div class="usercenterwrap">
    <div class="background">
      <div class="header">
        <span @click="handleback">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-back"></use>
          </svg>
        </span>
        <span>
          <router-link to="/register1">注册</router-link>
        </span>
      </div>
      <div class="backgroundpet">
        <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="">
      </div>
      <div class="logintaps">
        <div @click="handleclick1">普通登录</div>
        <div @click="handleclick2">动态密码登录</div>
      </div>
    </div>
    <div class="dengluzhuce">
      <div  v-show="isShow" class="denglu">
        <div class="denglu1 denglug">
          <span>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-account"></use>
          </svg>
          </span>
          <input type="text" v-model="phonenuber" placeholder="请输入用户名">
        </div>
        <div class="denglu2 denglug">
          <span>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-comments"></use>
          </svg>
          </span>
          <input type="text" v-model="code" placeholder="请输入密码">
        </div>
      </div>
      <div  v-show="!isShow"  class="zhuce">
        <div class="zhuce1 zhuceg">
          <span>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-account"></use>
          </svg>
          </span>
          <input type="text" placeholder="已注册的手机号">
        </div>
        <div class="zhuce2 zhuceg">
          <span>
             <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-comments"></use>
          </svg>
          </span>
          <input type="text" placeholder="请输入图片内容">
          看不清？点击切换—
          <span ref="random" @click="handlerandom">{{random}}</span>
        </div>
        <div class="zhuce2 zhuceg">
          <span>
             <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-phone"></use>
          </svg>
          </span>
          <input type="text" placeholder="动态密码">
          <span>DT获取密码</span>
        </div>
      </div>
    </div>
    <div class="anniu">
      <span class="anniuwangji">忘记密码</span>
      <div class="anniudenglu" @click="login">
        登录
      </div>
      <span>{{status}}</span>
      <ul ref="canvasg" class="canvasg">
        <li ref="canvasga" class="canvasga">{{a}}</li>
        <li ref="canvasgb" class="canvasgb">{{b}}</li>
        <li ref="canvasgc" class="canvasgc">{{c}}</li>
        <li ref="canvasgd" class="canvasgd">{{d}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        a:'',
        b:'',
        c:'',
        d:'',
        random: '',
        isShow: true,
        phonenuber:'',
        code:'',
        status:'未登陆'
      }
    },
    mounted () {

      this.randomCode(4)
//      this.$nextTick(() => {
//        console.log(this.$refs.random.innerHTML)
//      })
    },
    methods: {
      handlerandom () {
        this.randomCode(4)
      },
      randomunber (length) {
        let chars = [15, 20,26, 15, 5, 6, 7, 17, 16]
        let result = 1
        for (let i = 0; i < length; i ++ ){
          let index = Math.ceil(Math.random() * 8)
          result += chars[index]
        }
        result+=''
        return result
      },
      randomCode(length) {
        let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let result = "" // 统一改名: alt + shift + R
        for (let i = 0; i < length; i++) {
          let index = Math.ceil(Math.random() * 52)
          result += chars[index]
        }
        this.random = result
        this.canvas(result)
      },
      canvas (result) {
        this.a = result[0]
        this.b = result[1]
        this.c = result[2]
        this.d = result[3]

        this.$refs.canvasg.children[0].style.fontSize = this.randomunber(3) + 'px'
        this.$refs.canvasg.children[1].style.fontSize = this.randomunber(3) + 'px'
        this.$refs.canvasg.children[2].style.fontSize = this.randomunber(3) + 'px'
        this.$refs.canvasg.children[3].style.fontSize = this.randomunber(3) + 'px'
      },
      login() {
        axios.post('/loginself', {phone: this.phonenuber, code: this.code}).then(response => {
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            this.status = `登陆成功: ${user.phone}`
          } else {
            this.status = `登陆失败, 请输入正确的手机号和验证码`
          }
        })
      },
      handleback () {
        this.$router.go(-1)
        this.$store.dispatch('isShowGfoodnavy', true)
      },
      handleclick1 () {
        this.isShow = true
      },
      handleclick2 () {
        this.isShow = false
      }
    },
    watch: {
      status (newstate, oldstate) {
        if (newstate.length > 9){
          this.$router.push('/loginsuccess')

        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.usercenterwrap
  width 100%
  .background
    display flex
    flex-direction column
    justify-content space-between
    width 100%
    height 220px
    background-image url('//img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png')
    .header
      height 60px
      width 100%
      padding 0 10px
      display flex
      justify-content space-between
      align-items center
      font-size 20px
      font-family "Angsana New"
      color white
      box-sizing border-box
      &>span
        display flex
        height 100%
        width 20%
        font-size 20px
        justify-content center
        align-items center
        a
          color white
        &>svg
          font-size 25px

    .backgroundpet
      display flex
      justify-content center
      height 80px
      width 100%
      &>img
        width 30%
        height 100%

    .logintaps
      height 40px
      width 100%
      display flex
      justify-content space-around
      &>div
        height 100%
        width 35%
        background rgba(255,255,255,0.1)
        display flex
        justify-content center
        align-items center
        font-size 20px
        color white
        font-family Aharoni
  .dengluzhuce
    width 100%
    .denglu
      width 100%
      height 100px
      display flex
      flex-direction column
      justify-content space-between
      .denglug
        display flex
        justify-content center
        align-items center
        height 50%
        width 100%
        border-bottom 1px solid black
        &>input
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
        &>span
          margin-right 4px
    .zhuce
      width 100%
      height 150px
      display flex
      flex-direction column
      justify-content space-between
      .zhuceg
        display flex
        justify-content center
        align-items center
        height 33.33%
        width 100%
        border-bottom 1px solid black
        &>span
          margin-right 4px
        &>input
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
  .anniu
    display flex
    flex-direction column
    align-items center
    .anniuwangji
      width 100%
      height 40px
      display flex
      justify-content flex-end
      align-items center
      margin-right 20%
    .anniudenglu
      width 80%
      height 40px
      display flex
      justify-content center
      align-items center
      background green
      border-radius 10px
    .canvasg
      display flex
      justify-content center
      align-items center
      font-size 20px

</style>
