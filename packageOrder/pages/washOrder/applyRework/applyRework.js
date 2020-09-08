// packageOrder/pages/washOrder/applyRework/applyRework.js
import {throttle} from '../../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reworkReason:['洗护服务未达标','维修服务未达标','物件损坏/丢失','其他原因'], // 售后原因
    reworkGoodIndex: -1, // 选中的售后物件的索引
    reasonIndex: -1, // 选中的售后原因索引,
    isIphoneX: false, // 是否是iphonex,iphone11等
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
   * 选择售后物件的函数
   * @param {事件对象,包含当前选中的物件索引} e
   */
  chooseReworkGood:throttle(function(e){
    this.setData({
      reworkGoodIndex: e.currentTarget.dataset.index
    })
  },200),

  /**
   * 选择售后原因项目
   * @param {事件对象,包含当前选中的物件索引} e
   */
  chooseReworkReason:throttle(function(e){
    this.setData({
      reasonIndex: e.currentTarget.dataset.index
    })
  },200)
})