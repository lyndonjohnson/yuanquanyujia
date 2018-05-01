//index.js
//获取应用实例


Page({

  bindCheckbox: function (e) {

    var index = parseInt(e.currentTarget.dataset.index);
    var selected = this.data.course[index].selected;
    var course = this.data.course;
  
   if(selected == 'true'){
     course[index].selected = 'false';
   }else{
     course[index].selected = 'true';
   }

    var price = 0;
    
    //计算总金额
    for (var i = 0;i < course.length; i++) {
      if(course[i].selected == "true") {
        console.log(course[i].price);
        var price = parseInt(price) + parseInt(course[i].price);
     
      }
    }
    
     this.setData({
       course:course,
       price:price,
     });

  },

  //跳转课程详情页面
  Detailed: function (e) {
     
    var index = parseInt(e.currentTarget.dataset.index);

    wx.navigateTo({
      url: '../../../../single/single?id='+index,
    });
  },

  onLoad: function () {
    var _this = this;
    // this.data.postList = postsData.postList
    //this.sum();

    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'https://www.neophiledesign.com/index.php/wechat/course',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          course: res.data.list,
          price: res.data.list[0].price,
        })
      },

    })
  },

  //点击立即结算触发
  checkout:function(){

    wx.navigateTo({
      url: '../../../../order/checkout/checkout?price=' + this.data.price,
    });

  }

})