// components/li-tab-control/li-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      console.log(e)
      let item = e.currentTarget.dataset;
      let index = item.index;

      this.setData({
        currentIndex: index
      })
      
      this.triggerEvent('itemClick', { index, title: this.data.titles[index]})
    }
  }
})
