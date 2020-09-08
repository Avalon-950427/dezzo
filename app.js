//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    this.getSystemInfo();
    
    if(typeof this.globalData.system === "string" && this.globalData.system === "Android"){
      // 当手机系统信息已被初始化且系统为Android时,加载自定义字体
      this.loadFont('sy-m','http://img.jiaranjituan.cn/SourceHanSansCN-Medium.woff2');
    }
  },

  /**
   * 获取手机系统信息
   */
  getSystemInfo(){
    let _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.globalData.system = /iOS/.test(res  .system)?"iOS":/Android/.test(res.system)?"Android":"other";
        if(res.model.search('iPhone X') != -1 || res.model.search('iPhone 11') != -1){
          _this.globalData.isIphoneX = true;
        }
      }
    })
  },

  /**
   * 加载安卓默认字体
   * global为全局生效,family为引用时的名字,source为加载的资源
   */
  loadFont(fontName,url){
    wx.loadFontFace({
      global: true,
      family: fontName,
      source: `url(${url})`,
      success: (res) => {
        console.log('font load success', res);
      },
      fail: (err) => {
        console.log('font load fail', err);
      },
    });
  },

  globalData: {
    userInfo: null,
    system: undefined, // 手机系统
    isIphoneX: false, // 手机型号
  }
})