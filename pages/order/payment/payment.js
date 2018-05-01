const AV = require('../../../utils/av-weapp.js')
var app = getApp()
Page({
	data: {
		orderId: ''
	},
	onLoad: function (options) {
	
		this.setData({
      account: options.price
		})
	},
   // 时间戳产生函数  
  createTimeStamp: function () {
    return parseInt(new Date().getTime() / 1000) + ''
  },
  // 随机字符串产生函数  
  createNonceStr: function () {
    return Math.random().toString(36).substr(2, 15)
  },  
  pay: function () {
    var code = app.code
    wx.request({
      url: 'https://www.neophiledesign.com/wxpayapi/example/jsapi.php',
      data: {
        code: code
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        
        // success

        console.log(res.data);
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })

  }
})