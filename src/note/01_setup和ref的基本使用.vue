<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {defineComponent,ref} from 'vue'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
  name:'APP',
  // 需求：页面打开后可以直接看到一个数据，点击按钮后数据可以发生变化
  // 分别用Vue2和Vue3的方式实现
  // Vue2的方式
  // data(){
  //   return{
  //     count:0
  //   }
  // },
  // methods: {
  //   updateCount(){
  //     this.count++
  //   }
  // },
  // Vue3的方式
  setup(){
    // ref是一个函数，作用是定义一个响应式的数据,返回的是一个ref对象，里面有value属性
    // let count=0 //此时的count并不是响应式数据，响应式：（数据变化，页面也跟着变化）
    let count=ref(0)
    function updateCount() {
      // count++
      count.value++ //注意：在html模板中不需要.value
    }
    return{
      count,
      updateCount
    }
  }
})
</script>

<template>
<!-- Vue2的html模板中必须且只能有一个根标签，Vue3的html模板中可以没有根标签,因为vue3会将所有标签包含在一个Fragment虚拟元素中 -->
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <h2>
    setup和ref的基本使用
  </h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">点击</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
