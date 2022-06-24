<script lang='ts'>
import {defineComponent,ref,customRef} from 'vue'
import Child from './components/Child.vue'
// 自定义hook防抖函数
// value-传入的数据，将来数据的类型不确定所以用泛型，delay-防抖的时间间隔默认200毫秒
function useDebounceRef<T>(value:T,delay=200) {
  // 准备一个存储定时器的id的变量
  let timeout:number
  return customRef((track,trigger)=>{
    return{
      get(){
        track()
        return value
      },
      set(newValue){
        clearTimeout(timeout)
        timeout=setTimeout(() => {
          value=newValue
          trigger()
        }, delay);
      }
    }
  })
}
export default defineComponent({
  name:'',
  components:{
    Child
  },
  setup(){
   const keyword=useDebounceRef('abc',500)
    return{
      keyword
    }
  }
})
</script>
<template>
<h2>customRef的使用,返回自定义的ref对象</h2>
<input type="text" v-model="keyword"/>
<h3>keyword:{{keyword}}</h3>
</template>
<style>
</style>
