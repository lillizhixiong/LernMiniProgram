// components/my-mslot/my-mslot.js
Component({
  /**
   * 定义组件的内部选项
   * 
   * 样式是否相互影响
   * multipleSlots: 使用多插槽需要设置为true
   * styleIsolation: 设置样式的隔离方式
   */
  options: {
    multipleSlots: true
  },

  /**
   * 给外界传来样式
   * ***/
  externalClasses: [],

  /**
   * 监听properties/ data属性的值改变,没有旧值
   * 
   * **/
  observer: {
    title: function() {

    },
    name: function() {}
  },


  /**
   * 组件的属性列表
   * 
   * 使用者可以传入数据
   */
  properties: {
    title: {
      type:String,
      value: "我是默认样式",
      observer: function(n, o) {
        // 监听值的改变
      }


    }
  },

  /**
   * 组件的初始数据
   * 
   * 定义组件内部初始化数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * 
   * 用于定义组件内部的函数的,不同于Page
   */
  methods: {

  },

  //------------------ 组件中监听生命周期函数 ----------------------
  //  监听页面的生命周周期 
  pageLifetimes: {
    show() {
      console.log("----页面显示-----")
    },
    hide() {
      console.log("----页面隐藏-----")
    },
    resize(){
      console.log('页面尺寸改变的使用')
    }
  },
  //  也可以监听本身组件的生命周期
  lifetimes: {
    created() {
      console.log('---组件被创建--')
    },
    attached() {
      console.log('---组件被加载在页面上--')      
    },
    ready() {
      console.log('---组件被渲染出来--')      
    },
    dettached() {
      console.log('---组件被移除--')      
    }
  }
    
})
