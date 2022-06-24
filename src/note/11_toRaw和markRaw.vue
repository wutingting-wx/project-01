<script lang='ts'>
import {defineComponent,reactive,toRaw,markRaw} from 'vue'
interface UserInfo{
  name:string,
  age:number,
  hobbies?:string[]
}
export default defineComponent({
  name:'',
  setup(){
    const state=reactive<UserInfo>({
      name:'鸣人',
      age:20,
      car:{
        name:'奔驰',
        color:'red'
      }
    })
    // toRaw 把响应式的代理对象变成普通对象（不响应了）
    const testToRaw=()=>{
      const user=toRaw(state)
      user.name+='=='
    }
    // markRaw 被markRaw标记的对象从此都不能变成代理对象
    const testMarkRaw=()=>{
      // state.hobbies=['1','2']
      const hobbies=['吃','喝']
      state.hobbies=markRaw(hobbies)
      setInterval(()=>{
        state.hobbies[0]+='='
        console.log('定时器')
      },1000)
    }
    return{
      state,
      testToRaw,
      testMarkRaw
    }
  }
})
</script>
<template>
<h2>toRaw和markRaw</h2>
<h3>state:{{state}}</h3>
<hr/>
<button @click="testToRaw">测试toRaw</button>
<button @click="testMarkRaw">测试markRaw</button>
</template>
<style>
</style>
