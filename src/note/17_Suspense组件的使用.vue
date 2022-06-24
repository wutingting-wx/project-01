<script lang='ts'>
import {defineComponent,defineAsyncComponent} from 'vue'
// 引入组件：静态引入和动态引入
// vue2中动态引入组件的写法：
// const AsyncComponent=()=>import('./AsyncComponents.vue')

// vue3中动态引入组件的写法：
// const AsyncComponent=defineAsyncComponent(()=>import('./components/AsyncComponents.vue'))

// 静态引入组件
// import AsyncComponent from './components/AsyncComponents.vue'
import AsyncAddress from './components/AsyncAddress.vue'
export default defineComponent({
  name:'App',
  components:{
    // AsyncComponent
    AsyncAddress
  },
   setup(){

    return{}
  }
})
</script>
<template>
<h2>App父级组件：Suspense组件的使用</h2>
<!-- Suspense允许我们的应用程序在等待异步组件时渲染一下后备内容，可以让我们创建一个平滑的用户体验 -->
<Suspense>
  <template #default>
    <!-- 异步组件 -->
    <!-- <AsyncComponent/> -->
    <AsyncAddress/>
  </template>
  <template v-slot:fallback>
    <!-- loading -->
    <h2>loading...</h2>
  </template>
</Suspense>
</template>
<style>
</style>
