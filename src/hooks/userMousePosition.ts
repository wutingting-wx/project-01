import {ref,onMounted,onBeforeUnmount} from 'vue'
export default function(){
  const x=ref(-1)
    const y=ref(-1)
    // 点击事件的回调函数
    const clickHandler=(e:any)=>{
      x.value=e.pageX
      y.value=e.pageY
    }
    // 页面加载完毕的声明周期
    onMounted(() => {
      window.addEventListener('click',clickHandler)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('click',clickHandler)
    })
    return{
      x,
      y,
      clickHandler
    }
}
