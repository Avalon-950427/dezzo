// packageWash/pages/chooseWashClassify/chooseWashClassify.js
import {throttle} from '../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    washClassify:[
      {
        name:"箱包",
        classify: [
          {
            service: "钱包",
            url:""
          },
          {
            service: "包袋",
            url:""
          },
          {
            service: "箱包",
            url:""
          }
        ]
      },{
        name: "鞋靴",
        classify: [
          {
            service: '单鞋',
            url: ''
          },{
            service:'潮鞋',
            url: ''
          },{
            service: '短靴',
            url: ''
          },{
            service: '长靴',
            url: ''
          },{
            service: '靴',
            url: ''
          },{
            service: '长',
            url: ''
          },{
            service: '66',
            url: ''
          },{
            service: '666',
            url: ''
          }
        ]
      },{
        name: "服饰",
        classify: [
          {
            service: '短款皮衣',
            url: ''
          },{
            service:'长款皮衣',
            url: ''
          },{
            service: '皮裤皮裙',
            url: ''
          }
        ]
      },{
        name: "配饰",
        classify: [
          {
            service: '皮带',
            url: ''
          },{
            service:'丝巾围巾',
            url: ''
          },
        ]
      }
    ],
    isIphoneX: false, // 手机型号是否是iphoneX等
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isIphoneX: app.globalData.isIphoneX
    })
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

  },

  /**
   * 选择洗护物件分类
   * @param {事件对象,包含选择物件的index} e
   */
  chooseClassify:throttle(function(e){
    wx.navigateTo({
      url: '/packageWash/pages/chooseWashDetail/chooseWashDetail',
    })
  },1000),
})