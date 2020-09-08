// packageOrder/pages/washOrder/orderDetail/orderDetail.js
import {throttle} from '../../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps:['寄出','平台收货','洗护维修','寄回','订单完成'],
    isIphoneX: false, // 是否需要适配iphoneX等的小黑条
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isIphoneX:app.globalData.isIphoneX
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
   * 点击复制按钮,复制订单编号
   */
  copy:throttle(function(){
    wx.setClipboardData({
      data: '123911',
      success(res){
        console.log(res)
      },
      fail(e){}
    })
  },500)
})