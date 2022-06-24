<script lang='ts'>
import {defineComponent,reactive,computed} from 'vue'
import {Todo} from '../types/todo'
export default defineComponent({
  name:'Item',
  props:{
    todo:{
      type:Object as ()=> Todo
    },
    deleteTodo:{
      type:Function
    },
    index:{
      type:Number
    },
    updateTodo:{
      type:Function
    }
  },
  setup(props){
    // 删除数据的方法
    const delTodo=()=>{
      if(window.confirm('确定要删除吗')){
        props.deleteTodo(props.index)
      }
    }
    const isCompleted=computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        // 设置todo对象中的isCompeted
        props.updateTodo(props.todo,val)
      }
    })
    return{
      delTodo,
      isCompleted
    }
  }
})
</script>
<template>
<li class="todo-item">
    <label>
      <input type="checkbox" v-model="isCompleted"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger delBtn" @click="delTodo()">删除</button>
</li>
</template>
<style scoped>
.todo-item{
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
.todo-item label{
  float: left;
  cursor: pointer;
}
.todo-item label input{
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
.todo-item button{
  float: right;
  display: none;
  margin-top: 3px;
}
.todo-item::before{
  content: initial;
}
.todo-item:last-child{
  border-bottom: none;
}
.delBtn {
  background-color: #e95b47;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: none;
}
.todo-item:hover {
  color:lightcoral;
  background-color: rgba(137,190,78,.3);
}
.todo-item:hover .delBtn {
  display: block;
}
</style>
