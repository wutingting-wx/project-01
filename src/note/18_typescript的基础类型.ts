(()=>{
  // 1.布尔类型
  let isDone: boolean = false
  isDone = true
  // isDone = 2 // error

  // 2.数字类型
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  // 3.字符串类型
  let name: string = 'tom'
  name = 'jack'
  // name = 12 // error
  let age: number = 12
  const info = `My name is ${name}, I am ${age} years old!`

  // 4.undefined 和 null
  let u: undefined = undefined
  let n: null = null

  // 5.数组
  // 有两种方式可以定义数组:
  // (1)可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
  let list1: number[] = [1, 2, 3]
  // (2)第二种方式是使用数组泛型，Array<元素类型>
  let list2: Array<number> = [1, 2, 3]

  // 6.元组
  // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
  // 在定义数组的时候，类型和数据的个数，一开始就已经限定了
  let t1: [string, number]
  t1 = ['hello', 10] // OK
  // t1 = [10, 'hello'] // Error

  // 7.枚举
  // 使用枚举类型可以为一组数值赋予友好的名字
  enum Color {
    Red,
    Green,
    Blue
  }
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green // 0
  console.log(myColor, Color.Red, Color.Blue)
  // 通过数值查找相应名字
  let colorName: string = Color[2]
  console.log(colorName)

  // 8.any
  // 可以是任何类型
  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false // 也可以是个 boolean
  // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时就可以使用any类型来定义数组
  let list: any[] = [100, true, 'free']
  list[1] = 100
  // console.log(list[0].split(',')) //error any类型的缺点是有问题的代码编译会通过，这里list[0]是数字类型，没有split方法

  // 9.void
  // 表示没有任何类型
  // 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
  /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
  function fn(): void {
    console.log('fn()')
  // return undefined
  // return null
  // return 1 // error
  }

  // 10.Object
  // object 表示非原始类型，也就是除 number，string，boolean之外的类型
  function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
  }
  console.log(fn2(new String('abc')))
  // console.log(fn2('abc') // error
  console.log(fn2(String))

  // 11.联合类型
  // 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求1：定义一个函数得到一个数字或字符串值的字符串形式值
  function toString2(x: number | string): string {
    return x.toString()
  }
  // 需求 2: 定义一个函数得到一个数字或字符串值的长度
  function getLength(x:number|string){
    // if(x.length){
    // error
    //   return x.length
    // }else{
      return x.toString().length
    // }
  }

  // 12.类型断言
  // 可以用来手动指定一个值的类型
  // 类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法
  /* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
  function getLength2(x: number | string) {
    if ((<string>x).length) {
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength2('abcd'), getLength2(1234))

  // 13.类型推断
  // TS 会在没有明确的指定类型的时候推测出一个类型
  /* 定义变量时赋值了, 推断为对应的类型 */
  let b9 = 123 // number
  // b9 = 'abc' // error

  /* 定义变量时没有赋值, 推断为any类型 */
  let b10 // any类型
  b10 = 123
  b10 = 'abc'
})()
