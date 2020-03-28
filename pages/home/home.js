// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleShowToast() {
    wx.showToast({
      title: '你好啊',
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '我是标题哦',
      content: '哈哈哈哈',
    })
  },

  handleShowLoading() {
    // 这个加载需要手动关闭  调用wx.hide()
    wx.showLoading({
      title: '加载ing',
    })

    setTimeout(()=> {
      wx.hideLoading()()
    },1000000)
  },

  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: (res) => {
        console.log(res)
      }

    })
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