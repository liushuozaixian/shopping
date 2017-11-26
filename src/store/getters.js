export default {
  //获取firstpage的导航下面的8个小图标
  index2435 (state) {
    if (state.main.datas){
     return state.main.datas.find((item) => {
        return item.index == 2435
      }).menus
    }else {
      // console.log(state.main)
      return [{target:''}]
    }

    // return state.datas.find((item)=>{
    //   item.index == 2435
    // })
  },
  index1 (state) {
    if (state.main.datas) {
      return state.main.datas.find((item) => {
        return item.index == 1
      } ).value
    }else {
      return [{target:''}]
    }
  },
  indexdsgFQ (state) {
    if (state.main.datas) {
      return state.main.datas.find((item) => {
        return item.index == 'dsgFQ'
      } ).goods
    } else {
      return [{image:''}]
    }
  },
  index464 (state) {
    if (state.main.datas) {
      return state.main.datas.find((item) => {
        return item.index == 464
      } ).list
    }else {
      return [{main_image:''}]
    }
  },
  datas (state) {
    if (state.main.datas) {
      return state.main.datas
    }else {
      return []
    }
  }

}
