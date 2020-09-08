// packageWash/pages/settlement/settlement.js
import {throttle} from '../../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIntegral: false, // 是否选中积分抵扣,false为不选中
    checkContract: false, // 是否选中购买合同,false为不选中
    timeArr: [['今天','明天','后天'],["8:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00"]], // picker可选的顺丰上门时间
    timeIndex: [0,0], // picker选中的顺丰可选时间索引
    isIphoneX: false, // 手机型号是否是iphoneX等
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isIphoneX: app.globalData.isIphoneX
    })
    this.initDeliveryTime();
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
  clickIntegral: throttle(function(){
    this.setData({
      isIntegral:!this.data.isIntegral
    })
  },500),

  /**
   * 选择同意购买合同
   */
  checkContract: throttle(function(){
    this.setData({
      checkContract: !this.data.checkContract
    })
  },200),

  /**
   * 初始化快递可选配送时间
   */
  initDeliveryTime(index){
    let now = new Date(),// 获取当前时间
      currentHour = now.getHours(),
      timeArr = [['今天','明天','后天'],[]], // 多列picker的data数据
      hours = []; // 一天中可选的时间段
    if(typeof index == 'undefined' || (typeof index == 'number' && index == 0)){
      if(currentHour<8){
        hours = ['8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00'];
      }else if(currentHour>=8&&currentHour<10){
        hours = ['10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00'];
      }else if(currentHour>=10&&currentHour<12){
        hours = ['12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00'];
      }else if(currentHour>=12&&currentHour<14){
        hours = ['14:00-16:00','16:00-18:00','18:00-20:00'];
      }else if(currentHour>=14&&currentHour<16){
        hours = ['16:00-18:00','18:00-20:00'];
      }else if(currentHour>=16&&currentHour<18){
        hours = ['18:00-20:00'];
      }else{
        hours=["今日已停止预约"];
      }
    }else{
      hours = ['8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00'];
    }
    timeArr[1] = hours;
    this.setData({
      timeArr: timeArr
    })
  },

  /**
   * 修改picker组件值时触发的函数
   * @param {e.detail.value表示picker组件每一列的索引值} e 
   */
  pickerChange(e){
    this.setData({
      timeIndex: e.detail.value
    })
  },

  /**
   * picker组件某一列改变时触发的函数
   * @param {e.detail.column表示第几列改变,e.detail.value表示这一列更改后的索引值} e 
   */
  columnChange(e){
    if(e.detail.column == 0){ // 当修改picker组件的第一列时,重置上门时间
      this.initDeliveryTime(e.detail.value);
    }
  },

})