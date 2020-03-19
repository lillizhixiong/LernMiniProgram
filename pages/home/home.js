// pages/home/home.js

// 调用Page方法注册一个页面
//每个页面也有自己的生命周期函数
Page({
  // -----------2.初始化数据 -------------
  data:{
    list:[]
  },

  //--------1. 监听页面的生命周期函数--------
  // 运行顺序1
  // 页面被加载出来
  onLoad() {
    // 一般在这里发送网络请求
    wx.request({
      url: '',
      success:function() {

      }
    })
  },

  // 运行顺序2  执行多次
  // 页面显示出来时
  onshow(){

  },
  // 页面隐藏后执行
  onHide() {},

  // 运行顺序3
  // 小程序页面再初次渲染完成 (只执行一次)
  onReady() {

  },
  //页面被卸载卸载后,就是跳转以后
  onUnload() {

  },

  // ------3.监听XML里面的一些事件 ----------

  // ------4.监听其他事件 ------------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动动到底部
  onReachBottom() {},

  // 下拉刷新(在json文件开启true))
  onPullDownRefresh() {}

})