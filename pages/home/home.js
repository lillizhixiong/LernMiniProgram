import {
   getMultiData,
   getGoodesData
   
   } from '../../service/home.js';
// pages/home/home.js
const types = ['pop', 'new', 'sell'];
const scrollTop = 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', "新款","精选"],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: "pop",
    isShowBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  // ------------------------事件监听函数------------------------------------------------
  handleTabClick(et) {
    let index = et.detail.index;

    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {

    // 获取组件的距离顶部的距离
    let query = wx.createSelectorQuery();
    query.select("#tab-control").boundingClientRect((rect) => {
      this.data.tabScrollTop = rect.top;
    }).exec();
  },
  //---------------------网络请求函数--------------------------------------------------------
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners, recommends
      })

    })
  },
  _getGoodesData(type) {

    // 1.获取当前类型的页码
    let page = this.data.goods[type].page + 1;

    // 2. 发送网络请求
    getGoodesData(type, page).then(res => {


      // 2.1 取出数据
      const list = res.data.data.list;
      
      // 2.2 将数据设置到对应的list中
      let oldList = this.data.goods[type].list;
      

      oldList.push(...list);

      // 2.3 将oldList 放回goods中

      let typeKey = `goods.${type}.list`;
      let pageKey = `goods.${type}.page`;
      

      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取轮播图和推荐的数据
    this._getMultiData();

    //2获取商品数据
    this._getGoodesData('pop');
    this._getGoodesData('new');
    this._getGoodesData('sell');
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
    // 上拉加载更多

    this._getGoodesData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onPageScroll:function(et) {
    let flag1 = et.scrollTop >= scrollTop;

    if(flag1!= this.data.isShowBackTop) {
      this.setData({
        isShowBackTop: flag1
      })    
    }

    // 修改isTabFixed属性
    let flag2 = et.scrollTop >= this.data.tabScrollTop;
    console.log(flag2)
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }

  }
})