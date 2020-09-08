// pages/goodClassify/goodClassify.js
import {throttle,binarySearch} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bigClassify:['推荐','品牌','包袋','配饰','服饰','鞋靴','全新','风格','专区'],
    alphabets:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    top: [], // 每个锚点距离scroll-view顶部的距离
    toView: '', // 跳转的锚点
    activeAlphabetsIndex: 0, // 激活的首字母索引,
    selectedBigClassifyIndex: 0, // 被选中的大分类索引
    timer: null, // 定时器名字
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
    
    // this.timer = setTimeout(() => {
    //   this.getTop();
    // }, 0)
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
    this.timer = null;
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
   * 选择左侧大分类,当选中的分类索引为1时即品牌分类,获取各个小分类的首字母元素的scrollTop
   * @param {事件对象,包含当前选中的大分类的索引}  e
   */
  chooseBigClassify:throttle(function(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      selectedBigClassifyIndex: index
    })
    typeof index != 'undefined' && index == 1 ? this.getTop() : false;
  },200),
  

  /**
   * 选择品牌字母
   * @param {事件对象,包含当前点击的项和点击的索引} e
   */
  chooseAlphabet:throttle(function(e){
    let dataset = e.currentTarget.dataset;
    this.setData({
      toView: dataset.id,
      activeAlphabetsIndex: dataset.index
    })
  },200),

  /**
   * 获取品牌首字母距离scroll-view的距离
   */
  getTop(){
    const query = wx.createSelectorQuery(),
      _this = this;
    this.data.alphabets.forEach((item,index) => {
      query.select(`#${item}`).boundingClientRect((rect)=> {
        _this.data.top[index] = rect.top;
      }).exec();
    })
  },

  /**
   * 品牌区域的scroll-view滚动事件
   * 每次滚动触发事件去二分查找当前scrollTop在top数组哪个区间,并根据区间激活对应的activeAlphabetsIndex
   */
  scrollBrand: throttle(function(args){
    let index = binarySearch(this.data.top,args.detail.scrollTop); 
    this.setData({
      activeAlphabetsIndex: typeof index == 'undefined' ? 0 : index + 1, // 如果为undefined,则说明在A区域
    })
  },300),
})