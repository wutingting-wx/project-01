import {ref} from 'vue'
// 引入axios
import axios from 'axios'
// 发送请求
export default function(url:string){
  // 加载得状态
  const loading=ref(true)
  const data=ref(null)
  const errorMsg=ref('')
  // 发送请求
  axios.get(url).then(response=>{
    // 改变加载状态
    loading.value=false
    data.value=response.data
  }).catch(error=>{
    // 改变加载状态
    loading.value=false
    errorMsg.value=error.message||'未知错误'
  })
  return {
    loading,
    data,
    errorMsg
  }
}
