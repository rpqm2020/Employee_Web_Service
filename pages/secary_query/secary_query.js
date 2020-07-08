// pages/secary_query/secary_query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  bingo2:function(){
    wx.navigateBack()
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=17792814097',//接口地址
      header: {     
        'content-type': 'application/json'      // 默认值
        },   
success: (res) => {//成功响应数据
        /*this.setData({
          tracks:e.data.data.tracks
        })*/
        /*app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })*/
          result:res.data;
          console.log(res.data)
          console.log(res.__GetZoneResult_)
          console.log(res)
          //这里调用了淘宝电话归属查询地址：需要转换成JSON.使用javascript,同时，使用JSON.parse()方法。
          /*
          __GetZoneResult_ = {
                             mts:'1357116',
                             province:'陕西',
                             catName:'中国移动',
                             telString:'13571168660',
                            	areaVid:'30503',
	                          ispVid:'3236139',
                           	carrier:'陕西移动'
                           }
          */
          //将__GetZoneResult_ = 除掉，利用string.split（）分组函数
          var $res=res.data.split("=")[1];
          //console.log($res)
          //使用string.replace将字符串加上双引号，此处注意，要加上双引号，单引号不行效果如下：
          var $result=$res.replace(/(\w+):'([^']*)'/g,"\"$1\":\"$2\"");
          console.log($result)
          //使用JSON.parse就可以转换成JSON
          var $resJson=JSON.parse($result);
          console.log($resJson)
           console.log('获取数据，携带值为', $resJson.mts)
          //试了多次无法将接口的数据返回页面
          var str=$resJson.mts;
          if(res.statusCode == '200'){
            // 赋值
            var postData = $resJson;
            var key = $resJson.key;
            console.log($resJson.result);
            this.setData({
             postdata:postData,
             key:key
             })
          }else{
            console.log("获取失败");
          }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})