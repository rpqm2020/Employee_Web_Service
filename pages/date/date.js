let app = getApp();
/*let compose = require('../../utils/compose');
let dateFormat = require('../../utils/dateutil');
let utils = require('../../utils/utils');*/
Page({
  data: {
    /*dateCurrentStr: dateFormat.formatDay(new Date()), */// 正选择日期的 id
    dateCurrentStr:11, 
    bgWhiteImgUrl: 'http://img0.imgtn.bdimg.com/it/u=1641805254,627977274&fm=26&gp=0.jpg', //选中的日期白色背景图
    months: [],
    maxCount:10,
    clientHeight: 0,
    clientWidthCount: 0
  },
  onLoad: function () {
    //加载前设置loading为true
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight - 90,
          clientWidthCount: parseInt(res.windowWidth / 50)    ///一个小正方形宽度50，获得屏幕宽度计算数量
        });
      }
    })
    //在月份数组中添加10条记录，从当月开始倒推
    this.add(new Date());
    // 在日期数组中添加10条记录(从当天开始)
    this.add(new Date(), "今 天");
    for (var i = 1; i <= 12; i++) {
      this.add(new Date().setDate(new Date().getDate() + i));
    }


    this.setData({
      loading: true,
      Dates: this.data.months
    });
  },


  // 日历组件部分
  add: function (obj) {
    var date = new Date(obj);
    var year = date.getFullYear();
    var mon = (date.getMonth() -1) < 10 ? '0' + (date.getMonth() - 1) : date.getMonth() - 1;
    if (txt != "") {
      year = txt;
    }
    var obj = {
      id: year + '-' + mon ,
      text: year,
      year:year,
      mon: mon
    };
    this.data.months.push(obj);
  },
  ClickDateCheng: function (e) {
    var currentDate = e.currentTarget.id;
    this.setData({
      dateCurrentStr: currentDate
    });
    // 刷新列表
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000
    })
  }

})