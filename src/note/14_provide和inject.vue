<script lang='ts'>
import {defineComponent,ref,provide} from 'vue'
import Son from './components/Son.vue'
export default defineComponent({
  name:'',
  components:{
    Son
  },
  setup(){
   const color=ref('red')
    //  提供数据
    provide('color',color)
    return{
      color
    }
  }
})
</script>
<template>
<h2>provide和inject</h2>
<p>当前的颜色：<span :style="{color:color}">{{color}}</span></p>
<button @click="color='red'">红色</button>
<button @click="color='yellow'">黄色</button>
<button @click="color='green'">绿色</button>
<hr/>
<Son/>
</template>
<style>
</style>
