<script lang='ts'>
import {defineComponent,reactive,toRefs,watch,onMounted} from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
// 引入接口
import {Todo} from './types/todo'
import {saveTodos,readTodos} from './utils/localStorageUtils'
export default defineComponent({
  name:'App',
  components:{
    Header,
    List,
    Footer
  },
  setup(){
    // // state里的todos是Todo类型的数组
    // const state=reactive<{todos:Todo[]}>({
    //   todos:[
    //     {id:1,title:'奔驰',isCompleted:false},
    //     {id:2,title:'宝马',isCompleted:true},
    //     {id:3,title:'奥迪',isCompleted:false},
    //   ]
    // })
     // state里的todos是Todo类型的数组
    const state=reactive<{todos:Todo[]}>({
      todos:[]
    })
    // 界面加载完毕后读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos=readTodos()
      }, 300);
    })
    // 添加数据的方法
    const addTodo=(todo:Todo)=>{
      state.todos.unshift(todo)
    }
    // 删除数据的方法
    const deleteTodo=(index:number)=>{
      state.todos.splice(index,1)
    }
    // 修改todo的isCompleted的状态
    const updateTodo=(todo:Todo,isCompleted:boolean)=>{
      todo.isCompleted=isCompleted
       console.log(todo)
    }
    // 全选或者全不选的方法
    const checkAll=(isCompleted:boolean)=>{
      state.todos.forEach(todo => {
        todo.isCompleted=isCompleted
      })
    }
    // 清理所有选中数据
    const clearAllCompletedTodos=()=>{
      state.todos=state.todos.filter(todo=>!todo.isCompleted)
    }
    // 监视操作：如果todos数组的数据变化了，就缓存在localStorage中
    watch(()=>state.todos,saveTodos,{deep:true})
    return{
      // toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    }
  }
})
</script>
<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
    <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"/>
  </div>
</div>
</template>
<style scoped>
/* app */
.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
