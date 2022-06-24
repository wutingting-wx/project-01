<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// Vue2响应式和Vue3响应式的区别
// 1.Vue2响应式
// 对象：通过defineProperty对对象的已有属性值的读取和修改进行劫持
// 数组：通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
// 2.Vue3的响应式
// 通过Proxy代理：拦截对data任意属性的任意操作
// 通过Reflect:动态对被代理对象的相应属性进行特定的操作
import {defineComponent,reactive} from 'vue'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
  name:'APP',
  // 需求：显示用户的相关信息，点击按钮可以更新用户信息
  setup(){
    // reactive可以创建多个响应式数据
    const user=reactive({
      name:'小明',
      age:20,
      wife:{
        name:'小甜甜',
        age:18,
        cars:['奔驰','宝马']
      }
    })
    const updateUser=()=> {
      user.name="小强"
    }
    return{
      user,
      updateUser
    }
  }
})
</script>

<template>
<!-- Vue2的html模板中必须且只能有一个根标签，Vue3的html模板中可以没有根标签 -->
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <h2>
    reactive的基本使用
  </h2>
  <h3>{{user.name}}</h3>
  <h3>{{user.age}}</h3>
  <h3>{{user.wife}}</h3>
  <button @click="updateUser">点击</button>
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
