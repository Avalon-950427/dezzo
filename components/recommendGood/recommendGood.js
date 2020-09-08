// components/recommendGood/recommendGood.js
import {throttle} from '../../utils/util.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goGoodDetail: throttle(function(){
      wx.navigateTo({
        url: '/packageGoods/pages/goodDetail/goodDetail'
      })
    },1000)
  }
})
