<template>
  <div>
    <div class="mainheader">
      <div class="mainheader-search">
        <span @click="chongqing3(true)" class="mainheader-search-1">狗狗站</span>
        <span class="mainheader-search-2"></span>
        <span class="mainheader-search-3">
            <span @click="chongqing3(true)" ref="mainheader3chongqing" class="mainheader-search-3chongqing">
              {{city2cityname}}
            </span>
            <span>
              ｖ
            </span>
          </span>
        <input placeholder="搜素商品和品牌" type="text" class="mainheader-search-4">
        <span class="mainheader-search-5">
            <!--mydope.png-->
          </span>
      </div>
      <div ref="mainheadernavy">
        <ul class="mainheader-navy">
          <li>
            <router-link to="/main/firstpage-1">首页</router-link>
          </li>
          <li>
            <router-link to="/main/firstpage-2">服饰城</router-link>
          </li>
          <li>
            <router-link to="/main/firstpage-3">狗狗主粮</router-link>
          </li>
          <li>
            <router-link to="/main/firstpage-4">医疗保健</router-link>
          </li>
          <li>
            <router-link to="/main/firstpage-5">零食玩具</router-link>
          </li>
          <li>
            <router-link to="/main/firstpage-6">我去</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div ref="mainbody" class="mainbody">

        <router-view></router-view>

    </div>
    <!--开始了地址的遮罩区域的编写-->
    <div v-show="isShow" class="maskdog">
      <div class="maskdogheader">
        <svg @click="chongqing3(false)" class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
        <div class="maskdogheader2">选择收货地址</div>
        <svg class="icon icon2" aria-hidden="true">
          <use xlink:href="#icon-qrcode"></use>
        </svg>
      </div>
      <div ref="maskdogselect" class="maskdogselect">
        <div @click="selectpet('cat')" class="maskdogselectcat maskdogselectG" >猫猫站</div>
        <div @click="selectpet('dog')" class="maskdogselectdog maskdogselectG">狗狗站</div>
        <div @click="selectpet('fish')" class="maskdogselectfish maskdogselectG">水族站</div>
      </div>
      <div class="maskdogarea">
        <ul v-if="citys.hotcity" v-show="isCityShow">
          <li @click="handlecity1(index)" v-for="(city1, index) in citys.hotcity">
            {{city1.cityname}}
          </li>
        </ul>
        <!--<v-distpicker @selected="onSelected" type="mobile" province="重庆市" city="" area=""></v-distpicker>-->
        <br>

        <br>
        <ul v-if="citys.hotcity" v-show="!isCityShow">
          <li @click="handlecity2(city2.cityname)" v-for="city2 in citys.cityclassify[city1code].list">
            {{city2.cityname}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      data () {
        return {
          city2cityname: localStorage.getItem('city') && JSON.parse(localStorage.getItem('city')).nam || '北京',
          isCityShow: true,
          city1code: 0,
          citys: {},
          isShow: false,
        }
      },
      computed: {
        ...mapState(['main'])
      },
      methods: {
        handlecity2 (name) {
//          this.city2cityname = name
          localStorage.setItem('city', JSON.stringify({nam:name}))
          this.city2cityname = localStorage.getItem('city') && JSON.parse(localStorage.getItem('city')).nam
//          console.log(localStorage.getItem('city') + 'SG');
          this.isShow = false
          this.isCityShow = true
        },
        handlecity1 (city1code) {
          this.city1code = city1code
//          localStorage.setItem('city', city1code)
//          console.log(localStorage.getItem('city') + 'SG');
          this.isCityShow = !this.isCityShow
        },
//        province (data) {
//          this.isShow = false
//        },
//          选择地区的最后一项触发最后
        onSelected (data) {
          console.log(data)
        },
//          定义首页路由滑动的方法
        _initscroll () {
              this.menuScroll = new BScroll(this.$refs.mainheadernavy, {
              click: true, //分发点击事件
              scrollX: true
            })
          },
//        点击显示与隐藏首页中的那个重庆和对应的遮罩层的显示与隐藏的click事件
        chongqing3 (el) {
          this.isShow = el
        },
//        点击遮罩层中的动物选择数据的方法
        selectpet (pet) {
//       点击时候pet颜色的改变
          let maskdogselect = this.$refs.maskdogselect.children
          for (let i = 0; i < maskdogselect.length; i++) {
            maskdogselect[i].removeAttribute('class','maskdogselectpet')
              if (pet == 'cat') {
                maskdogselect[0].setAttribute('class','maskdogselectpet')
              }else if (pet == 'dog'){
                maskdogselect[1].setAttribute('class','maskdogselectpet')
              }else if(pet == 'fish'){
                maskdogselect[2].setAttribute('class','maskdogselectpet')
              }

          }
//            在这里要去请求数据！还没写

          setTimeout(() => {
            this.isShow = false
          },1000)
        }
      },

      mounted () {
//        请求position数据
        axios.get('/api2/position').then((response) => {
//            console.log(response.data.city)
          this.citys = response.data.city
        })
        this.$store.dispatch('getData')
//          调用首页路由滑动的函数
//        setTimeout(() => {
//            console.log(this.main)
//        },300)
        this._initscroll()
      },
      watch: {
        main (olddata,newdata) {
            this.$nextTick(() => {
              this.menuScroll.refresh()
            })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mainheader
  position fixed
  width 100%
  height 80px
  z-index 1
  /*background lightgoldenrodyellow*/
  .mainheader-search
    height 40px
    display flex
    color lightslategray
    justify-content space-around
    font-size 18px
    /*color #7e8c8d*/
    align-items center
    /*background #3333*/
    .mainheader-search-2
      width 1px
      height 18px
      background black
    .mainheader-search-3
      .mainheader-search-3chongqing
        height 100%
    .mainheader-search-4
      color red
      font-size 12px
      width 200px
      height 25px

    .mainheader-search-5
      width 25px
      height 25px
      background url("../common/img/mydope.png")
      background-size 100%
  .mainheader-navy
    height 40px
    /*width 100%*/
    display flex
    width 430px
    li
      width 70px
      display flex
      align-items center
      justify-content space-around
      font-size 16px
.mainbody
  position absolute
  top 80px
  bottom 0px
  width 100%
  overflow hidden
.maskdog
  position absolute
  width 100%
  height 100%
  background white
  z-index 10
  .maskdogheader
    height 60px
    width 100%
    display flex
    justify-content space-between
    align-items center
    font-size 22px
    .icon
      display flex
      justify-content center
      align-items center
      height 60%
      width 20%
    .icon2
      height 45%
  .maskdogselect
    width 100%
    height 60px
    background #F5F5F5
    display flex
    align-items center
    justify-content space-between
    box-sizing border-box
    padding 0 7%
    &>div
      display flex
      height 55%
      width 27%
      justify-content center
      align-items center
      border-radius 6px
      border solid 1px #B9B9B9
      background #B9B9B9
      color: #666
      font-size 15px


      /*定义的一个高亮的背景的*/
    .maskdogselectpet
      background #FF0000
      color #FFE4E4
</style>
