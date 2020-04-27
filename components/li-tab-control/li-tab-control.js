// components/li-tab-control/li-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
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
    handleTabClick(et) {
      let item = et.currentTarget.dataset;

      this.setData({
        currentIndex: item.index
      })

      this.triggerEvent('tabItemClick', item)
    }
  }
})
