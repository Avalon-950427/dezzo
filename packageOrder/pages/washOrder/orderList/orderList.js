const { throttle } = require("../../../../utils/util");

// packageOrder/pages/washOrder/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['全部','待收款','待寄出','待收货','已完成','售后单'], // tab栏分类
    activeTabIndex: 0, // 当前激活的tab索引
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

  },

  /**
   * 选择tab栏分类的函数
   * @param {事件对象,包含当前tab索引index}  e
   */
  chooseTab: throttle(function(e){
    this.setData({
      activeTabIndex: e.currentTarget.dataset.index
    })
  },300),

  /**
   * 点击订单列表订单,跳转至订单详情页面
   * @param {事件对象,包含当前点击的订单索引}  e
   */
  toOrderDetail:throttle(function(e){
    wx.navigateTo({
      url: `/packageOrder/pages/washOrder/orderDetail/orderDetail`,
    })
  },1000)
})