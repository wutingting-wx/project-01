(()=>{
  // 一、类的基本定义与使用
  //类：可以理解为模板，通过模板可以实例化对象
  class Person4{
    name:string
    age:number
    gender:string
    // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name:string,age:number,gender:string){
      // 更新对象中的属性数据
      this.name=name
      this.age=age
      this.gender=gender
    }

    // 定义实例方法
    sayHi(str:string){
      console.log(`大家好，我是${this.name},今年${this.age}岁了`,str)
    }
  }

  // ts使用类，实例化对象，可以直接进行初始化操作
  const person4=new Person4('佐助',18,'男')
  person4.sayHi('你叫什么名字')

  // 二、类的继承
  // 基类---父类
  // 子类---派生类
  class Person5{
    // 定义属性
    name:string
    age:number
    gender:string
    // 定义构造函数
    constructor(name:string,age:number,gender:string){
      this.name=name
      this.age=age
      this.gender=gender
    }
    // 定义实例方法
    sayHi(str:string){
      console.log(`我是：${this.name}，今年${this.age}岁，我是${this.gender}生，你是谁？`,str)
    }
  }
  const person5=new Person5('小花',18,'女')
  person5.sayHi('我好看吗')

  // 定义一个类，继承Person5
  class Student extends Person5{
    constructor(name:string,age:number,gender:string){
      // 调用父类中的构造函数，用super
      super(name,age,gender)
    }
    // 调用父类中的方法
    sayHi(str: string): void {
      console.log('我是学生类Student的sayHi方法')
      // 调用父类的sayHi方法
      super.sayHi('哈哈')
    }
  }
  // 实例化Student
  const stu=new Student('小甜甜',16,'女')
  stu.sayHi('哇哇')

  // 总结：类和类之间的继承关系使用extends关键字
  // 子类中调用父类的构造函数和方法，使用关键字super
})()
