var app = getApp()
Page({
   data: {
     logs: [],
    
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 1000,
     userInfo: {}  
   },
   onTap: function () {
       wx.navigateTo({
         url: "../reagin/reagain",
       });
     },
     //获取经纬度
  getLocation: function(e) {
    console.log(e)
    var that = this
    wx.chooseLocation( {
      success: function( res ) {
       
        that.setData( {
          hasLocation: true,
        
            longitude: res.address,
            latitude: res.latitude,
            
        
        })
      }
    })
  },

     onBuy:function() {
       wx.navigateTo({
         url: "../index/index",
       });
     },  

     onLoad: function () {
       var _this = this;

       wx.request({
         //上线接口地址要是https测试可以使用http接口方式
         url: 'https://www.neophiledesign.com/index.php/wechat/xlunbo',
         data: {},
         method: 'GET',
         header: {
           'content-type': 'application/json'
         },
         success: function (res) {
          console.log(res.data);
          _this.setData({
             xlunbo: res.data.list
           })
         },

       })

       wx.request({
         //上线接口地址要是https测试可以使用http接口方式
         url: 'https://www.neophiledesign.com/index.php/wechat/xjieshao',
         data: {},
         method: 'GET',
         header: {
           'content-type': 'application/json'
         },
         success: function (res) {
           console.log(res.data);
           _this.setData({
             xjieshao: res.data.list
           })
         },

       })

     },
 

})