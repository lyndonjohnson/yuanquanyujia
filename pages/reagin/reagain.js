var app = getApp()
Page({
   data: {
     
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 1000,
     userInfo: {}  
   },
  
   onLoad: function () {
     var _this = this;
   
     wx.request({
       //上线接口地址要是https测试可以使用http接口方式
       url: 'https://www.neophiledesign.com/index.php/wechat/jieshao',
       data: {},
       method: 'GET',
       header: {
         'content-type': 'application/json'
       },
       success: function (res) {
         console.log(res.data);
         _this.setData({
           jieshao: res.data.list
         })
       },

     })
  
   }

 

})