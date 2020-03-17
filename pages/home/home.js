// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: "lizhixiong",
    age: 18,
    students:[
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'james', age: 31},
      {id: 112, name: 'curry', age: 28},
      {id: 113, name: 'tom', age: 30}
    ],
    counter: 0
  },
  add() {
    let _this = this;
    _this.setData({
      counter: _this.data.counter + 1
    })
  },
  sub() {
    let _this = this;

    _this.setData({
      counter: _this.data.counter - 1
    })
  }
})