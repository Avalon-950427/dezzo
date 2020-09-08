// packageGoods/pages/goodDetail/goodDetail.js
import {throttle} from '../../../utils/util.js'

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsParam: [{key:"商品编号",value: "098711"},{key:"品牌",value:"CHANEL"},{key:"颜色",value: "米色"},{key:"材质",value:"羊皮"},{key:"尺寸",value:"高度30cm,宽度30cm,长度55cm"},{key:"序列码",value:"1322323"},{key:"适合人群",value: "女士"}],// 商品参数
    FAQs: [
      {
        question:"关于购买",
        answer: "对象平台销售商品为二手闲置品，根据不同新旧等级会有不同程度的磨损，具体请参考新旧评级标准和具体描述。商品售出，如无质量问题不退不换。",
        hidden: true,
      },
      {
        question: "关于正品保障",
        answer: "对象所有商品均有中检认证鉴定师团队亲历20道鉴定养护流程，承诺100%正品。中华联合财险承保，假一赔三，让您购物无忧。",
        hidden: true
      },
      {
        question: "关于退货",
        answer: "1.因质量问题产生的退货需求，请联系对象客服。退货时请将商品及全部附件、凭证、包装一并寄回。如有缺失，或将会影响退款。退货运费由对象承担，退款金额以原支付路径退回您的账户。非质量问题退货，往返运费由买家承担。\n2.特殊品类：衣服和鞋靴，如尺码不合适，下单7天内可申请退货，但需自行承担寄出、寄回运费。 \n3.平台会定期举行各类促销活动，期间部分商品会特别标准【非质量问题不退不换】，请留意。 \n4.付款价格不低于1000人民币的商品可以在平台一键转卖，我们会对其重新进行审核、定级、定价。转卖商品服务费与寄卖一致，佣金为商品实际价格的20%。 订单签收次日起七天内，如有售后问题可联系人工客服申请售后。如退货受理，您需要在受理后的七天内将商品邮寄到指定退货地址（以快递签收时间为准），我们将在收到您的退货商品七天内审核办理退货退款。若超过七天邮寄至指定地址，则平台有权利不接受您的退货需求。",
        hidden: true
      },
      {
        question: "关于物流和物资",
        answer: '对象平台销售商品为二手闲置品，根据不同新旧等级会有不同程度的磨损，具体请参考新旧评级标准和具体描述。商品售出，如无质量问题不退不换。',
        hidden: true
      }
    ], // 常见问题    
    priceDescription: [
      {
        question: '对象标价',
        answer: '对象价格为商品的销售价格，具体成交价格根据商品参加活动，或者使用优惠券、积分等发生变化，最终以订单结算页面价格为准。因为二手商品的特殊性，商品为珍藏货限量版时会出现商品售价会高于市场价的情况，如有疑问可在购买前咨询客服。',
      },
      {
        question: '市场价',
        answer: '对象价格为商品的销售价格，具体成交价格根据商品参加活动，或者使用优惠券、积分等发生变化，最终以订单结算页面价格为准。因为二手商品的特殊性，商品为珍藏货限量版时会出现商品售价会高于市场价的情况，如有疑问可在购买前咨询客服。',
      },
      {
        question:  '市场价格参考来源',
        answer: '品牌原产国官网或全球知名二手网站、专业品类资讯网站、品牌年鉴等。'
      }
    ], // 价格说明
    goodList: [1,2,3,4,5], // 商品推荐列表
    showPop: false, // 是否展示成色弹窗
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
   * 点击常见问题的函数
   * @param {事件对象,包含点击的问题索引}  e
   */
  clickQuestion:throttle(function(e){
    let FAQs = this.data.FAQs,
      index = e.currentTarget.dataset.index;
    FAQs[index].hidden = !FAQs[index].hidden;
    this.setData({
      FAQs: FAQs
    })
  },300),

  /**
   * 跳转到结算页面的函数
   */
  goSettlement: throttle(function(){
    wx.navigateTo({
      url: '/packageGoods/pages/settlement/settlement',
    })
  },1000),

  /**
   * 查看折扣的函数
   */
  viewDiscount: throttle(function(){
    this.setData({
      showPop: true,
    })
  },500),

  /**
   * 点击我知道了,隐藏弹窗
   */
  iKnow: throttle(function(){
    this.setData({
      showPop: false
    })
  },500)
})