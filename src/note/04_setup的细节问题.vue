<script lang="ts">
import {defineComponent,ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Child from './components/Child.vue'
export default defineComponent({
  components:{
    Child
  },
  // setup细节问题：
  // setup是在beforeCreate生命周期之前就执行了,也就是说setup在执行的时候，当前组件还没有创建出来，也就意味着：组件实例对象this根本就不能用
  // setup中的方法和methods中的方法会合并为组件对象的方法，尽量不要混合使用setup、data和methods
   setup(props,context){
     console.log(props)
     console.log(context)
    const msg=ref('what are you doing')
    const updateData=()=>{
      msg.value+='==='
    }
    return{
      msg,
      updateData
    }
  }
})
</script>

<template>
<!-- Vue2的html模板中必须且只能有一个根标签，Vue3的html模板中可以没有根标签 -->
 <h2>App父级组件</h2>
 <button @click="updateData">更新数据</button>
 <hr/>
 <Child :msg="msg"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
