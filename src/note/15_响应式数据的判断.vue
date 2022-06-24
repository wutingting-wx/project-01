<script lang='ts'>
import {defineComponent,ref,isRef,reactive,isReactive,readonly,isReadonly,isProxy} from 'vue'
export default defineComponent({
  name:'App',
  // isRef:检查一个值是否为ref对象
  // isReactive:检查一个对象是否是由reactive创建的响应式代理
  // isReadonly:检查一个对象是否由readonly创建的只读代理
  // isProxy:检查一个对象是否由reactive或者readonly方法创建的代理
  setup(){
    // isRef
    console.log(isRef(ref({})))
    // isReactive
    console.log(isReactive(reactive({})))
    // isReadonly
    console.log(isReadonly(readonly({})))
    // isProxy
    console.log(isProxy(reactive({})))
    return{

    }
  }
})
</script>
<template>
<h2>响应式数据的判断</h2>
</template>
<style>
</style>
