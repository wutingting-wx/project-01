(()=>{
  function add(x:string,y:string):string{
    return x+y
  }
  const result1:string=add('111','222')
  console.log(result1)

  const add2=(x:number,y:number):number=>{
    return x+y
  }
  console.log(add2(10,20))

  const add3:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y
  }
  console.log(add3(10,30))
})()
