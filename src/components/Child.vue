<script lang='ts'>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name:'Child',
  props:{
    age:{
      type:Number,
      required:true
    },
    msg:{
      type:String
    }
  },
  setup(props){
    console.log(props.age)
    return{
    }
  }
})
</script>
<template>
<h2>Child子级组件</h2>
<h3>{{msg}}</h3>
<h3>{{age}}</h3>
</template>
<style>
</style>
