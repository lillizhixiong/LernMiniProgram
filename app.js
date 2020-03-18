App({

  /**
   * 当小程序关闭后,会在后台存活2个小时,只执行一次
   * 
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */

  
  onLaunch: function () {
    // 可以获取用户信息
    // 发送请求
    // wx.getUserInfo({
    //   success:(res) => {
    //     // 已经废弃
    //     // 看home 使用新方式
    //     // 通过点击button获取
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 
   * 会执行多次
   */
  //  可以判断进入的场景
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },
  
  // 全局的共享的数据
  globalData: {
    name: 'lzhixiong'
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
