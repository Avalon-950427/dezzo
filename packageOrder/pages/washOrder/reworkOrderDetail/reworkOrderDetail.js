// packageOrder/pages/washOrder/reworkOrderDetail/reworkOrderDetail.js
import {throttle} from '../../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: ['寄出','平台收货','售后服务','寄回','完成'], // 物件物流步骤
    times: [['今天','明天','后天'],['8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00']], // 物流预约可选的时间
    show: false, // 是否显示弹窗区域,false不显示
    isIphoneX: false, // 是否需要像iphonex一样适配底部小黑条
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
   * 点击取消隐藏弹窗的时间
   */
  hidePopup:throttle(function(){
    this.setData({
      show: false
    })
  },500)
})