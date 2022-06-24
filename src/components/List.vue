<script lang='ts'>
import {defineComponent,reactive} from 'vue'
import Item from './Item.vue'
export default defineComponent({
  name:'List',
  props:['todos','deleteTodo','updateTodo'],
  components:{
    Item
  },
  setup(){
    return{}
  }
})
</script>
<template>
<ul class="todo-main">
  <Item v-for="(todo,index) in todos" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index" :updateTodo="updateTodo"/>
</ul>
</template>
<style scoped>
/* main */
.todo-main{
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty{
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
