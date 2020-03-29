//常量
const TOKEN = "token";
App({
  // 对象: 小程序页面一关闭就会回收内存

  globalData: {
    token: ""
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1. 先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);

    // 2. 判断token是否有值
    if( token && token.length != 0 ) {  // 已经有token了,验证token是否过期
      //  验证token 是否过期
      this.check_token(token);
    } else {  // 这里没有token
      this.login();
    }

    // 小程序登录状态
    // 1. 通过wx.login向微信服务器获取code
    // 2. 获取到code后,向公司服务器发送code(有时需要账号和密码);
    // 3. 公司服务器拿到code后(有时需要先拿到账号账号和密码进行比对),在将appid,appscretp和code发            送到微信服务器,获取openid(微信用户的唯一标识),和session_key
    // 4. 将openid保存在数据库中, 自定义登录状态与openid和session_key关联
    // 5. 返回登录状态(token)客户端, 拿到token将保存在storage中
    // 6. 业务请求,将token携带发送过去
    // 7. 登录可以事先token进行比对,如果失效的话在重新登录 
    
    
    
  },
  check_token(token) {
    wx.request({
      url: 'http://106.54.54.237:8000/api/h3/auth',
      method: "post",
      header: {  // 将token放在请求头中
        token
      },
      success: function(res) {
        if(!res.data.errCode) {
          this.globalData.token = token;
          console.log('登录成功')
        }else {
          this.login();
        }
      }
    })
  },
  login() {
    wx.login({
      success: (res) => {
        let code = res.code; // 有效期5分钟
        
        wx.request({
          url: 'http://106.54.54.237:8000/api/h3/login', // 公司服务器接口
          method: 'post',
          data: {
            code
          },
          success: (res) => { // 获取token
            // 1.取出token
            const token = res.data.token;
            // 2.将token 保存在本地存储中
            this.globalData.token = token;  // 获取token 存入globalData中

            wx.setStorageSync(TOKEN, token)
          }
        })

      }
    })
   }
  
})
