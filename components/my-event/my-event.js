// components/my-event/my-event.js
Component({

  methods: {
    handleAdd() {
      // 向外部发送事件 类似于emit
      this.triggerEvent('add', {})
    }
  }
 
  
})
