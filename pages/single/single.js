Page({

  
  onLoad: function(options) {
    var _this = this;
  
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'https://www.neophiledesign.com/index.php/wechat/single',
      data: {
        'id' : options.id,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        _this.setData({
          course: res.data.list,
        })
      },
    
    })

  },

 
})