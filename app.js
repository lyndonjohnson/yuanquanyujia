//app.js
App({
  code:null,
  onLaunch: function () {
    var that = this;
    //调用API从本地缓存中获取数据
    wx.login({
      success:function(res){
        if(res.code){
          that.code = res.code;
        }else{
          console.log('获取了'+res.code)
        }
      }
    });
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})