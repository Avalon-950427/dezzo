// packageGoods/pages/settlement/settlement.js
import {throttle} from '../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIntegral: false, // 是否选中积分抵扣,false为不选中
    checkContract: false, // 是否选中购买合同,false为不选中
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
   * 选择积分抵扣
   */
  clickIntegral:throttle(function(){
    this.setData({
      isIntegral:!this.data.isIntegral
    })
  },500),

  /**
   * 选择同意购买合同
   */
  checkContract:throttle(function(){
    this.setData({
      checkContract: !this.data.checkContract
    })
  },200)
})