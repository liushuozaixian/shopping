<template>
  <div class="wrapfirstp" ref="wrap">
    <div class="content">
      <!--轮播图-->
      <Carousel></Carousel>
      <div class="icons">
        <span v-for="(item ,index) in index2435" :key="index">
          <span>
           <a href="">
              <img :src="item.image" alt="SG">
           </a>
          </span>
        </span>

      </div>
      <Split></Split>
      <div class="everydaysell">
        <div class="headline">
          <div class="logo"></div>
          <div class="data">
            <span>
              距离本场结束还剩
            </span>
            <span>00 : 00 : 00</span>
          </div>
          <div class="more"></div>
        </div>
        <div ref="sellgoods" class="sellgoods">
          <ul class="sellgoodswrap">
            <li class="sellgoodswrapli" v-for="(item, index) in indexdsgFQ" :key="index">
              <span class="sellgoodswraplispan1">
                <img :src="item.image.image" alt="">
              </span>
              <span class="sellgoodswraplispan2">{{item.sale_price}}</span>
              <span class="sellgoodswraplispan3">{{item.little_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <Split></Split>
      <Dogfoot selltitle="热门栏目" selltitlecolor="green"></Dogfoot>
      <div class="hotsection">
        <div class="hotsection1">
          <img src="../../common/img/ae3a4e59053ae36f5e4d323d18e076b4.jpg" alt="">
        </div>
        <div class="hotsection2">
          <img src="../../common/img/d9f50ad1778258d1cfb2283cd979f353.jpg" alt="">
          <img src="../../common/img/c888e5b76038b91ee0de91b6f3df5916.jpg" alt="">
        </div>
      </div>
      <Split></Split>
      <Dogfoot selltitle="潮品视频" selltitlecolor="red"></Dogfoot>
      <div class="hotvideo">
        <img src="../../common/img/d9f50ad1778258d1cfb2283cd979f353.jpg" alt="">
        <div>夜空中最亮的星星</div>
        <div>
          <span>7397</span>
          <span>竖线</span>
          <span>6989</span>
        </div>
      </div>
      <Split></Split>
      <Dogfoot selltitle="体验馆" selltitlecolor="yellow"></Dogfoot>
      <div class="testhouse">
        <img src="../../common/img/8b8e4f14c0c0d5a5a214cb51015135ed.png" alt="">
      </div>
      <Split></Split>
      <Dogfoot selltitle="品牌特卖" selltitlecolor="black"></Dogfoot>
      <ul class="brandseller">

        <li class="brandsellerli" v-if="datas.length > 0" v-for="(item, index) in datas" v-show="item.is_show == 1 &&item.type == 7 && item.is_dynamic == 0">
          <div class="brandsellerlidiv1">
            <span class="brandsellerlidivspan1">{{item.title}}</span>
            <span class="brandsellerlidivspan2">{{item.sub_title}}</span>
          </div>
          <div class="brandsellerlidiv2">
            <a href="">
              <img v-if="item.content_images && item.content_images[0]" :src="item.content_images[0].image" alt="">
            </a>
          </div>
        </li>

      </ul>
      <Split></Split>
      <Dogfoot selltitle="口碑评价" selltitlecolor="blue"></Dogfoot>
      <ul class="mousecomments">
        <li v-for="(item, index) in index464" class="mousecommentsli">
          <div class="mousecommentslidiv">
            <img :src="item.main_image.image" alt="">
            <div class="mousecommentslidivdiv">{{item.join_time}}</div>
          </div>
          <div class="mousecommentslidiv2">
            <span>{{item.username}}</span>
            <span class="mousecommentslidiv2span">{{item.pet_des}}</span>
          </div>
          <div class="mousecommentslidiv3">
            {{item.comment_content}}
          </div>
        </li>
      </ul>
      <Split></Split>
      <div class="firstpagefotter">
        <div class="firstpagefotter1">
          <span class="firstpagefotter1span">触屏版</span>
          <span>手机客户端</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </div>
        <div class="firstpagefotter2">&copy;www.pet.chognqing.com :重庆宠物集团股份有限公司中国分公司</div>
        <div class="firstpagefotter3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import Carousel from '../../components/carousel/carousel.vue'
  import Split from '../../components/split/split.vue'
  import Dogfoot from '../../components/dogfoot/dogfoot.vue'
  import BScroll from 'better-scroll'
    export default {
      mounted () {
          this.scroll = new BScroll (this.$refs.wrap,{
            click: true
          })
        this.scroll2 = new BScroll (this.$refs.sellgoods,{
          click: true,
          scrollX: true
        })
      },
      computed: {
        ...mapState(['main']),
        ...mapGetters(['index2435', 'indexdsgFQ', 'index464', 'datas']),
      },
      components: {
        Carousel,
        Split,
        Dogfoot
      },
      methods: {

      },
      watch: {
        main (olddata,newdata) {
          this.$nextTick(() => {
            this.scroll.refresh()
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapfirstp
  width 100%
  height 100%
  .content
    .icons
      display flex
      flex-wrap wrap
      span
        width 25%
        height 90px
        display flex
        justify-content center
        align-items center
        span
          width 90%
          height 90%
          background-image url("../../common/img/4.gif")
          background-size 100%
          img
            width 100%
            height 100%
    .everydaysell
      /*background yellow*/
      .headline
        display flex
        justify-content space-between
        box-sizing border-box
        padding 5px
        height 40px
        .logo
          height 100%
          width 30%
          background-image url("../../common/img/suprice.png")
          background-repeat no-repeat
          background-size 100%
          background-position -10px 5px
        .data
          display flex
          justify-content space-around
          align-items center
          font-size 10px
          width 50%
          height 100%
        .more
          width 15%
          height 100%
          background-image url("../../common/img/d59418e11adda40d5bfc3148f4edef46.png")
          background-size 120%
          background-position -4px -10px


      .sellgoods
        width 100%
        height 160px
        /*background #3333*/
        .sellgoodswrap
          display flex
          /*此处的宽度要JS动态的设置！！！！！！！！！！*/
          width 800px
          height 100%
          align-items center
          .sellgoodswrapli
            display flex
            flex-direction column
            align-items center
            height 100%
            width 100px
            justify-content space-around
            .sellgoodswraplispan1
              height 70%
              width 85%
              img
                width 100%
                height 100%
            .sellgoodswraplispan2
              color #FF2929
              font-size 14px
            .sellgoodswraplispan3
              color #A6A6A6
              font-size 14px
    .hotsection
      height 250px
      width 100%
      background black
      display flex
      .hotsection1
        width 50%
        height 100%
        img
          width 100%
          height 100%
      .hotsection2
        width 50%
        height 50%
        img
          height 100%
          width 100%
    .hotvideo
      width 100%
      height 320px
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      font-size 14px
      color #7e8c8d
      img
        width 100%
        height 90%

    .testhouse
      height 300px
      width 100%
      img
        height 100%
        width 100%
    .brandseller
      width 100%
      .brandsellerli
        width 100%
        /*height 300px*/
        display flex
        flex-direction column
        .brandsellerlidiv1
          display flex
          height 30px
          align-items center
          .brandsellerlidivspan1
            margin-left 10px
            font-size 20px
            color #838383
          .brandsellerlidivspan2
            margin-left 20px
            font-size 14px
            color #7e8c8d
        .brandsellerlidiv2
          height 200px
          width 100%
          display flex
          a
            width 100%
            height 100%
            img
              height 100%
              width 100%
    .mousecomments
      display flex
      width 100%
      flex-wrap wrap
      .mousecommentsli
        width 50%
        height 200px
        .mousecommentslidiv
          position relative
          width 100%
          height 70%
          img
            width 100%
            height 100%
          .mousecommentslidivdiv
            text-align center
            margin auto
            position absolute
            bottom 0
            left 0
            right 0
            background rgba(255,255,255,0.5)


        .mousecommentslidiv2
          width 100%
          height 13%
          font-size 14px
          color #7e8c8d
          display flex
          justify-content space-around
          align-items center
          .mousecommentslidiv2span
            text-align center
            width 45%
            background rgba(#7e8c8d,0.2)
            border-radius 6px
        .mousecommentslidiv3
          width 100%
          height 17%
          font-size 14px
          line-height 16px
          color lightslategray
          overflow hidden
    .firstpagefotter
      display flex
      flex-direction column
      .firstpagefotter1
        height 40px
        box-sizing border-box
        padding 0 20px
        display flex
        font-size 20px
        justify-content space-around
        align-items center
        .firstpagefotter1span
          color red
      .firstpagefotter2
        display flex
        width 100%
        font-size 14px
        height 40px
        line-height 20px
        text-align center
      .firstpagefotter3
        height 80px
        width 10%
</style>
