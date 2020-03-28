// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: "我是默认值",
      observer: function(n, o) { // 观察者,可以监听值改变
        console.log(n, o)
      }
    }
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
