(()=>{
  // 如果我们直接对一个泛型参数去length属性，会报错，因为这个泛型根本就不知道它有这个属性
  interface ILength{
    length:number
  }
  // 指定泛型约束
  function getLength<T extends ILength>(x:T):number{
    return x.length
  }
  console.log(getLength<string>('测试'))
})()
