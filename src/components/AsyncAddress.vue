<script lang='ts'>
import {defineComponent,reactive} from 'vue'
import axios from 'axios'
export default defineComponent({
  name:'AsyncAddress',
  async setup(){
    // return axios.get('/data/address.json').then(res=>{
    //   return {
    //     data:res.data
    //   }
    // })
    const res=await axios.get('/data/address.json')
    return{
      data:res.data
    }
  }
})
</script>
<template>
<h2>AsyncAddress组件</h2>
<h3>{{data}}</h3>
</template>
<style>
</style>
