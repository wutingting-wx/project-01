<script lang='ts'>
import {defineComponent,reactive,shallowReactive,ref,shallowRef} from 'vue'
export default defineComponent({
  name:'App',
  setup(){
    // reactive是深度响应式的
    const m1=reactive({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    // shallowReactive是浅响应式的,要修改内层的数据，必须先修改外层的
    const m2=shallowReactive({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    // ref属于深度响应
    const m3=ref({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    // shallowRef是浅响应式的，数据更改视图不随之更改
    const m4=shallowRef({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    const update=()=>{
      // 更改m1的数据---reactive方式
      // m1.name+='=='
      // m1.car.name+='=='
      // 更改m2的数据---shallowReactive
      // m2.name+='=='
      // m2.car.name+='=='
      // 更改m3的数据---ref方式
      // m3.value.name+='=='
      // m3.value.car.name+='=='
      // 更改m4的数据---shallowRef方式
      // m4.value.name+='=='
      m4.value.car.name+='=='
    }
    return{
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>
<template>
<h2>shallowReactive和shallowRef</h2>
<h3>m1:{{m1}}</h3>
<h3>m2:{{m2}}</h3>
<h3>m3:{{m3}}</h3>
<h3>m4:{{m4}}</h3>
<hr/>
<button @click="update">更新数据</button>
</template>
<style>
</style>
