// 注册一个小程序实例
App({

  // 生命周期函数

  // 小程序刚刚关掉 ,在点击进来不会被初始化的,可以在后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 先执行
   */
  // 执行顺序 1
  onLaunch: function () {
    // 1.在生命周期函数发送网络请求
    // wx.request({
    //   url: '',
    // })

    // 异步函数
    // 2.获取用户信息
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // 执行顺序2

  // 判断小程序的进入场景
  // 会执行多次
  onShow: function (options) {

    // 2.获取用户信息,并将获取到的用户信息传到服务器
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
