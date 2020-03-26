// pages/home/home.js
Page({
  data: {
    titles:['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    // alert('点秋香');
    console.log('点秋香')
  },
  handleTouchStart() {
    console.log('handleTouchStart');
  },
  handleTouchMove() {
    console.log('handleTouchMove');
  },
  handleTouchEnd() {
    console.log('handleTouchEnd');
  },
  handleTap() {
    console.log('handleTap');
  },
  handleTap() {
    console.log('handleTap');
  },
  handleLongTap() {
    console.log('handleLongTap')
  },

  // 事件对象
  handleEventClick(event) {
    console.log(event);
  },

  // 传递参数
  handleItemClick(e) {
    console.log(e)
  }

})