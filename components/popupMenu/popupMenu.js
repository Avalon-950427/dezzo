// components/popupMenu/popupMenu.js
import {throttle} from '../../utils/util.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: Boolean,
      value: false
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
    /**
     * 隐藏弹窗
     */
    hideMask:throttle(function(){
      this.setData({
        show: false
      })
    },500),

    /**
     * 阻止冒泡的空事件
     */
    catch(){},
  }
})
