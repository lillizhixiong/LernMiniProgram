export default function request(options) {

  return new Promise(function(resolve, reject) {
    wx.request({
      url: options.url,
      method: options.method || "GET",
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
  
}