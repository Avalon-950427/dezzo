//index.js
import {throttle} from '../../utils/util.js';
//获取应用实例
const app = getApp()

Page({
  data: {
    classifyTab: ['推荐','箱包','配饰','服饰','鞋靴','男士','腕表'], // 分类tab
    activeClassifyTabIndex: 0, // 激活的分类tab索引
    hotServices: [{
      name: '售后洗护',
      url: '/packageWash/pages/chooseWashClassify/chooseWashClassify'
    },{
      name: '鉴定回收',
      url: '/packageOrder/pages/washOrder/orderList/orderList'
    },{
      name: '寄卖变现',
      url: '/packageOrder/pages/washOrder/applyRework/applyRework'
    },{
      name: '全球帮买',
      url: '/packageWash/pages/settlement/settlement'
    }], // 热门服务
    goodList: [1,2,3,4,5], // 商品列表
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    
  },

  /**
   * 选择分类tab
   * @param {事件对象,包含被点击的tab的索引index} e
   */
  chooseClassifyTab: throttle(function(e){
    this.setData({
      activeClassifyTabIndex: e.currentTarget.dataset.index
    })
  },300),

  /**
   * 滑动swiper组件或者点击头部分类改变swiper-item
   * @param {事件对象} e 
   */
  changeSwiperItem:throttle(function(e){
    let source = e.detail.source;
    if(source!=""){
      this.setData({
        activeClassifyTabIndex: e.detail.current
      })
    }
  },300),

  /**
   * 选择热门服务事件
   * @param {事件对象,包含路由url}  e
   */
  chooseService:throttle(function(e) {
    const url = e.currentTarget.dataset.url;
    if(url){
      wx.navigateTo({
        url: url,
      })
    }
  },1000)
})
