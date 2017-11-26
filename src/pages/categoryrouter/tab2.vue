<template>

  <div class="wrap2p" ref="wrap">
    <div class="content">
      <scroller>
        <div class="contenttrue">
          <div class="contentli" v-for="(item ,index) in myclass.cate_list" :key="index">
            <div class="banner">
              {{item.title}}
            </div>
            <ul class="icons">
              <li class="iconsli" v-for="(item2, index2) in item.list" >
                <a class="iconslia" href="https://wap.epet.com/brand/bd725.html?fw=0">
                  <img :src="item2.photo" alt="">
                </a>
                <div class="iconslidiv">{{item2.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </scroller>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BSroll from 'better-scroll'
    export default {
      data () {
        return {
          fenleidata: [{
            xuanxiang: '热门推荐',
            goods: [1,2,31,2]
          },{
            xuanxiang: '狗粮',
            goods: [1,2,3,4]
          },{
            xuanxiang: '狗链',
            goods: [1,2,3]
          },{
            xuanxiang: '狗狗',
            goods: [1,2,3,4,5]
          },{
            xuanxiang: '狗啊狗',
            goods: [1,2,3,4,5]
          }
          ]
        }
        },
      computed: {
        ...mapState(['myclass'])
      },
      mounted () {

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap2p
  width 100%
  height 100%
  .content
    width 100%
    .contenttrue
      display flex
      flex-direction column
      .contentli
        width 100%
        .banner
          width 100%
          height 20px
          color black
          font-size 14px
          text-align center
          line-height 20px
          background lightgray
        .icons
          display flex
          flex-wrap wrap
          .iconsli
            display flex
            width 33.33%
            height 150px
            flex-direction column
            .iconslia
              width 100%
              height 86%
              img
                width 100%
                height 100%
            .iconslidiv
              font-size 1px
              color lightslategray
              text-align center

</style>
