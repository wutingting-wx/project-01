<script lang='ts'>
import {defineComponent,inject} from 'vue'
export default defineComponent({
  name:'GrandSon',
  setup(){
    const color=inject('color')
    return{
      color
    }
  }
})
</script>
<template>
<h3 :style="{color}">GrandSon孙子组件</h3>
</template>
<style>
</style>
