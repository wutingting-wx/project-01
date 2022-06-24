<script lang='ts'>
import {defineComponent,reactive,ref} from 'vue'
export default defineComponent({
  name:'Header',
  props:{
    addTodo:Function
  },
  setup(props){
    const title=ref('')
    // 回车事件的回调函数
    const add=()=>{
      // 获取文本框输入的数据，并判断不为空
      const text=title.value
      if(!text.trim()) return
      // 此时有数据
      const todo={
        id:Date.now(),
        title:text,
        isCompleted:false
      }
      // 调用addTodo方法
      props.addTodo(todo)
      // 清空文本框
      title.value=''
    }
    return{
      title,
      add
    }
  }
})
</script>
<template>
<div class="todo-header">
  <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
</div>
</template>
<style scoped>
/* header */
.todo-header input{
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus{
  outline: none;
  border-color: rgba(82, 168, 236, .8);
  box-shadow: inset 0 1px 1px rgba(82, 168, 236, .6),0 0 8px rgba(82, 168, 236, .6);
}
</style>
