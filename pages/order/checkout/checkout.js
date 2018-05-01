const AV = require('../../../utils/av-weapp.js')
var app = getApp()

Page({
	data: {
		amount : 0,
		carts: [],
		addressList: [],
		addressIndex: 0,
   
	},
	addressObjects: [],
	onLoad: function (options) {
    
    console.log(options.price);

    this.setData({
      price: options.price,
    })
	},

  wxpay:function(){
   var code = app.code;
   
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'https://www.neophiledesign.com/wxpayapi/example/jsapi.php',
      data: {
        code : code
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
       
      },

    })

  },


	readCarts: function (options) {
		// from carts
		// amount
		var amount = parseInt(options.amount);
		this.setData({
			amount: amount
		});

		// cartIds str
		var cartIds = options.cartIds;
		var cartIdArray = cartIds.split(',');
		// restore carts object
		var carts = [];
		for (var i = 0; i < cartIdArray.length; i++) {
			var query = new AV.Query('Cart');
			query.include('goods');
			query.get(cartIdArray[i]).then(function (cart) {
				carts.push(cart);
			}, function (error) {

			});
		}
		this.setData({
			carts: carts
		});
	},
  confirmOrder: function () {
    // submit order
    var carts = this.data.carts;
    var buys = [];
   
            wx.navigateTo({
              url: '../../../../../payment/payment?price=' + this.data.price
            });
        
	},
	loadAddress: function () {
		var that = this;
		var user = AV.User.current();
		var query = new AV.Query('Address');
		query.equalTo('user', user);
		query.find().then(function (address) {
			var addressList = [];
			var addressObjects = [];
			for (var i = 0; i < address.length; i ++) {
				// find the default address
				if (address[i].get('isDefault') == true) {
					that.setData({
						addressIndex : i
					});
				}
				addressList.push(address[i].get('detail'));
			}
			that.setData({
				addressList: addressList
			});
			that.addressObjects = address;
		});
	},
	bindPickerChange: function (e) {
		this.setData({
	    	addressIndex: e.detail.value
	    })
	}
})