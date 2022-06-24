<script lang='ts'>
import {defineComponent,ref,onMounted} from 'vue'

export default defineComponent({
  name:'App',
  // 需求1：当页面加载完毕后，页面中的文本框可以直接获取焦点（自动获取焦点）
  setup(){
    const inputRef=ref<HTMLElemnt|null>(null)
    onMounted(()=>{
      inputRef.value&&inputRef.value.focus()
    })
    return{
      inputRef
    }
  }
})
</script>
<template>
<h2>ref的另一个作用：可以获取页面中的元素</h2>
<input type="text" ref="inputRef"/>
</template>
<style>
</style>
