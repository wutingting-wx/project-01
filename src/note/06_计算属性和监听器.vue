<script lang="ts">
import {defineComponent,reactive,ref,computed,watch,watchEffect} from 'vue'
export default defineComponent({
  name:'App',
  // ref用来处理基本类型的数据，reactive用来处理对象（递归深度响应式）
  setup(){

     const user=reactive({
       firstName:'东方',
       lastName:'不败'
     })
    //  如果计算属性的函数中只传入一个回调函数，那就是get
    const fullName1=computed(()=>{
      return user.firstName+'_'+user.lastName
     })
     const fullName2=computed({
       get(){
         return user.firstName+'_'+user.lastName
       },
       set(val:string){
        //  console.log('====',val)
        const names=val.split('_')
        user.firstName=names[0]
        user.lastName=names[1]
       }
     })
     const fullName3=ref('')
    // 监听器 watch
    // watch---可以监听多个数据的
    // watch([user.firstName,user.lastName,fullName1],()=>{})
    // watch(user,(val)=>{
    //   fullName3.value=val.firstName+'_'+val.lastName
    // },{immediate:true,deep:true})
    // 监听器 watchEffect 不需要配置immediate,本身就会默认执行一次
    watchEffect(()=>{
      fullName3.value=user.firstName+'_'+user.lastName
    })
    return{
     user,
     fullName1,
     fullName2,
     fullName3
    }
  }
})
</script>

<template>
<h2>计算属性和监听器</h2>
<fieldset>
  <legend>姓名操作</legend>
  姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"/><br>
  名字：<input type="text" placeholder="请输入名字" v-model="user.lastName"/><br>
</fieldset>
<fieldset>
  <legend>计算属性和监听器的演示</legend>
  姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"/><br>
  姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"/><br>
  姓名：<input v-model="fullName3" type="text" placeholder="显示姓名"/><br>

</fieldset>

<button @click="update">更新数据</button>
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
