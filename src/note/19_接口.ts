(()=>{
  // 我们使用接口（Interfaces）来定义对象的类型
  /*
   需求: 创建人的对象, 需要对人的属性进行一定的约束
   id是number类型, 必须有, 只读的
   name是string类型, 必须有
   age是number类型, 必须有
   sex是string类型, 可以没有
  */
//  1.?可选属性  readonly只读属性
 interface Person{
   readonly id:number
   name:string
   age:number
   sex?:string
 }
 const person1:Person={
   id:1,
   name:'xxx',
   age:10,
  //  sex:'女' // 可有可无
 }
//  person1.id=2 //error id是只读属性


  //  2.函数类型
  /*
    接口可以描述函数类型(参数的类型与返回的类型)
  */
  interface SearchFunc {
    (source: string, subString: string): boolean
  }
  // 使用函数类型接口
  const mySearch: SearchFunc = function(source,sub){
    return source.search(sub) > -1
  }
  console.log(mySearch('abcd', 'bc'))

  // 3.类类型
  // 类实现接口
  /*
    类类型: 实现接口
    1. 一个类可以实现多个接口
    2. 一个接口可以继承多个接口
  */

  interface Alarm {
    alert(): any
  }

  interface Light {
    lightOn(): void
    lightOff(): void
  }

  class Car implements Alarm {
    alert() {
      console.log('Car alert')
    }
  }
  // 一个类可以实现多个接口
  class Car2 implements Alarm, Light {
    alert() {
      console.log('Car alert')
    }
    lightOn() {
      console.log('Car light on')
    }
    lightOff() {
      console.log('Car light off')
    }

  }
  // 一个接口可以继承多个接口
  interface LightableAlarm extends Alarm, Light {}
  interface IFly{
    fly():string
  }



  // implements--实现接口的方法
  // class定义的可以当做类，也可以当做一个类型使用
  class Person1 implements IFly{
    fly(){
      console.log('我会飞了')
      return '我会飞了'
    }
  }
  const person=new Person1()
  person.fly()

  interface ISwim{
    swim():string
  }
  // 一个类可以实现多个接口，一个类也可以同时被多个接口进行约束
  class Person2 implements IFly,ISwim{
    fly() {
      console.log('大漂亮')
      return '大漂亮'
    }
    swim() {
      console.log('我太帅了')
      return '我太帅了'
    }
  }
  const person2=new Person2()
  person2.fly()
  person2.swim()

  // 继承接口
  // 一个接口可继承多个其他的接口
  interface IFlyAndSwim extends IFly,ISwim{}

  // 定义一个类，实现接口IFlyAndSwim
  class Person3 implements IFlyAndSwim{
    fly(): string {
      console.log('xxx')
      return 'xxx'
    }
    swim(): string {
      console.log('yyy')
      return 'yyy'
    }
  }
  const person3=new Person3()
  person3.fly()
  person3.swim()
  // 总结：接口和接口之间叫继承（extends），类和接口之间叫实现（implements）

})()
