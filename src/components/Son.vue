<script lang='ts'>
import {defineComponent,reactive} from 'vue'
import GrandSon from './GrandSon.vue'
export default defineComponent({
  name:'Son',
  components:{
    GrandSon
  },
  setup(){
    return{}
  }
})
</script>
<template>
<h2>Son子级组件</h2>
<hr/>
<GrandSon/>
</template>
<style>
</style>
