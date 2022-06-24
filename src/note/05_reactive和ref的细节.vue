<script lang="ts">
import {defineComponent,ref,reactive} from 'vue'
export default defineComponent({
  name:'App',
  // ref用来处理基本类型的数据，reactive用来处理对象（递归深度响应式）
  setup(){
     const m1=ref('abc')
     const m2=reactive({
       name:'小明',
       wife:{
         name:'小红'
       }
     })
     const m3=ref({
       name:'小明',
       wife:{
         name:'小红'
       }
     })
     const update=()=>{
       m1.value+='==='
       m2.wife.name+='==='
       m3.value.name+='==='
     }
    return{
      m1,
      m2,
      m3,
      update
    }
  }
})
</script>

<template>
<!-- reactive和ref的细节问题 -->
<h2>{{m1}}</h2>
<h2>{{m2}}</h2>
<h2>{{m3}}</h2>
<hr/>
<button @click="update">更新数据</button>
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
