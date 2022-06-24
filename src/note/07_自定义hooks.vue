<script lang='ts'>
import {defineComponent,ref,onMounted,onBeforeUnmount} from 'vue'
import userMousePosition from './hooks/userMousePosition'
import userRequest from './hooks/userRequest'
// 定义接口，约束对象的类型
// interface IAddressData{
//   id:number,
//   address:string,
//   distance:string
// }
// interface IProductsData{
//   id:number,
//   address:string,
//   distance:string
// }
export default defineComponent({
  name:'App',
  // 需求1：用户在页面中点击页面，把点击的位置的横纵坐标收集起来并展示出来
  setup(){
   const {x,y}=userMousePosition()
  //  const {loading,data,errorMsg}=userRequest('/data/address.json')
   const {loading,data,errorMsg}=userRequest('/data/products.json')
    return{
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>
<template>
<h2>自定义Hook函数操作</h2>
<h2>x:{{x}},y:{{y}}</h2>
<h3 v-if="loading">正在加载中...</h3>
<h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
<ul v-else>
  <li>id:{{data.id}}</li>
  <li>address:{{data.address}}</li>
  <li>distance:{{data.distance}}</li>
</ul>
<hr/>
<!-- 数组数据 -->
<ul v-for="item in data" :key="item.id">
<li>id:{{item.id}}</li>
<li>title:{{item.title}}</li>
<li>price:{{item.price}}</li>
</ul>
</template>
<style>
</style>
