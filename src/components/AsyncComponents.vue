<script lang='ts'>
import {defineComponent,reactive} from 'vue'
export default defineComponent({
  name:'AsyncComponent',
  setup(){
    // return{}
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({
          msg:'what are you doing'
        })
      }, 2000);
    })
  }
})
</script>
<template>
<h3>AsyncComponent子级组件（异步组件）</h3>
<h3>{{msg}}</h3>
</template>
<style>
</style>
