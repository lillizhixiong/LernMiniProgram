// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleAddCpn(){
    // 最终目的是:修改my-sel的counter计算
    // 组件对象.setData({counter:})

    // const my_sel = this.selectComponent('class/id')
    const my_sel = this.selectComponent('#sel-id')
    // 直接调用组件内部的方法 或者让组件内部发送事件出来
    my_sel.handleAddClick()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})