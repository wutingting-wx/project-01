<script lang='ts'>
import {defineComponent,reactive,readonly,shallowReadonly} from 'vue'
export default defineComponent({
  name:'',
  setup(){
    const state=reactive({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    // readonly是深度只读，里层和外层数据都只读
    const state2=readonly(state)
    // shallowReadonly是浅度只读，只对外层数据影响
    const state3=shallowReadonly(state)
    const update=()=>{
      // state2.name+='=='
      // state2.car.name+='=='
      // state3.name+='=='
      // state3.car.name+='=='
    }
    return{
      state,
      state2,
      state3,
      update
    }
  }
})
</script>
<template>
<h2>readonly和shallowReadonly</h2>
<h3>state:{{state}}</h3>
<h3>state2:{{state2}}</h3>
<h3>state3:{{state3}}</h3>
<hr/>
<button @click="update">更新数据</button>
</template>
<style>
</style>
