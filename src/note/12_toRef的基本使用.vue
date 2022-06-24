<script lang='ts'>
import {defineComponent,reactive,toRef,ref} from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
  name:'',
  components:{
    Child
  },
  setup(){
    const state=reactive({
      age:5,
      money:100
    })
    // toRef 把响应式数据state对象中的某个属性age变成ref对象
    // state.age改变，age也会改变，两者会互相影响
    const age=toRef(state,'age')

    // ref state.money和money互不影响
    const money=ref(state.money)
    console.log(age)
    console.log(money)
    const update=()=>{
      // state.age+=2
      // age.value+=3
      state.money+=2
      money.value+=2
    }
    return{
      state,
      age,
      money,
      update
    }
  }
})
</script>
<template>
<h2>toRef的使用及特点</h2>
<h3>state:{{state}}</h3>
<h3>age:{{age}}</h3>
<h3>money:{{money}}</h3>
<Child :age="age"/>
<hr/>
<button @click="update">更新数据</button>
</template>
<style>
</style>
