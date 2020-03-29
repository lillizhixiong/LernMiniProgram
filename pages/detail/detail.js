// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onUnload() {
    // 返回修改首页的数据
    // 获取首页的页面对象
    let page = getCurrentPages(); // 获取当前所有活跃的栈页面

    const home = page[page.length - 2];

    home.setData()
  }
 
})