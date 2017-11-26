<template>
  <div class="wrapoo">
    <div ref="wrap1" class="wrap1p" >
      <ul class="choosewrap" v-if="myclass.cate_list">
        <li :class="{active: index == inn}" v-if="myclass.cate_list" @click="handleclick(index)" v-for="(item,index) in myclass.cate_list" :key="index">{{item.title}}</li>
      </ul>
    </div>
    <div ref="wrap2" class="wrap2">
     <div v-if="myclass.cate_list">
       <div class="wrap2div">
         <div v-if="myclass.cate_list" class="wrap2divdiv1">{{myclass.cate_list[inn].title}}</div>
         <div class="wrap2divdiv2">
           <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:5&fw=0">全部商品</a>
         </div>
       </div>
       <ul class="contentwrap">
         <li class="contentwrapli" v-if="myclass.cate_list" v-for="(item, inde) in myclass.cate_list[inn].list" :key="inde">
           <a class="contentwraplia" href="https://wap.epet.com/goodslist.html?extend_pam=cateid:5&fw=0">
             <img :src="item.photo" alt="">
           </a>
           <div v-if="myclass.cate_list" class="contentwraplidiv">{{item.name}}</div>
         </li>
       </ul>
     </div>
    </div>
  </div>
</template>

<script>
  import BSroll from 'better-scroll'

  import {mapState} from 'vuex'
    export default {
      data () {
       return {
           inn: 0
       }
      },
      methods: {
        handleclick (index) {
            console.log(index)
        this.inn = index
        this.$nextTick(() => {
            this.scroll2.refresh()
          }
        )
        }

      },
      mounted () {
        if(this.myclass.cate_list){
          if (!this.scroll2){
            this.scroll2 = new BSroll(this.$refs.wrap2, {
              click: true
            })
          }
          if (!this.scroll) {
            this.scroll = new BSroll(this.$refs.wrap1, {
              click: true
            })
          }
        }
      },
      computed: {
        ...mapState(['myclass'])
      },
      watch : {
        myclass () {
          this.$nextTick(() => {
            this.scroll = new BSroll(this.$refs.wrap1, {
              click: true
            })
            this.scroll2 = new BSroll(this.$refs.wrap2, {
              click: true
            })
          })

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 // 有一个的div是没有class而且在结构上直接忽略了这个div、但是样式还是没有影响
.wrapoo
  display flex
  width 100%
  height 100%
  overflow hidden
  .wrap1p
    width 30%
    height 100%
    .choosewrap
      width 100%
      li
        text-align center
        width 100%
        line-height 40px
        height 40px
        border-bottom  1px solid black

      .active
        background #F3F4F5
        color #F1BEC0
  .wrap2
    width 80%
    height 100%
    .contentwrap
      width 100%
    .wrap2div
      height 40px
      width 100%
      /*background greenyellow*/
      display flex
      justify-content space-around
      align-items center
      .wrap2divdiv1
        font-size 15px
        color red
      .wrap2divdiv2
        font-size 15px
        color red
    .contentwrap
      display flex
      flex-wrap wrap
      width 100%
      /*background yellow*/
      justify-content space-between
      .contentwrapli
        justify-content space-between
        width 33.33%
        height 150px
        display flex
        flex-direction column
        .contentwraplia
          width 100%
          height 85%
          img
            width 100%
            height 100%
        .contentwraplidiv
          font-size 14px
          color red
          line-height 25px
          text-align center

</style>
