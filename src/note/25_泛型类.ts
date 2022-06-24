(()=>{
  // 定义一个类，类中的属性值的类型不确定，方法中的参数和返回值的类型也不确定
  class GenericNumber<T> {
    zeroValue: T | undefined
    add: ((x: T, y: T) => T) | undefined
  }

  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y
  }

  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) {
    return x + y
  }

  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
})()
