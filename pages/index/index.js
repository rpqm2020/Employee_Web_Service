//index.js
//获取应用实例
const app = getApp()

/*Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})*/
Page({
  data: {
    message: '欢迎进入微信小程序!'
  },
  bingo:function(options){
    wx.setNavigationBarTitle({
      title: '工资查询',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    }),
    wx.switchTab({
      url: '../../pages/logs/logs', //要跳转到的页面路径
      })
  },
  bingo1:function(options){
    wx.navigateTo({
      url: '../../pages/secary_query/secary_query', //要跳转到的页面路径
      })
  },
  ssss:function(options){
    wx.navigateTo({
      url: '../../pages/date/date', //要跳转到的页面路径
      })
  },
  secary:function(options){
    wx.navigateTo({
      url: '../../pages/secary_query/secary_query', //要跳转到的页面路径
      })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../pages/secary_query/secary_query', //要跳转到的页面路径
      })
  }
})

