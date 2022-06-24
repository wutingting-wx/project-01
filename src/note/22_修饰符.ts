(()=>{
  // 修饰符：主要用来描述类中的成员（属性、构造函数、方法）的可访问性
  class Person6{
    public name:string
    constructor(name:string){
      this.name=name
    }
    public eat(){
      console.log('嗯，这个骨头真好吃')
    }
  }
})()
