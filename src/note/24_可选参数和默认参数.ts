(()=>{
  // 定义一个函数：传入姓氏和名字，可以得到姓名
  // 需求：如果不传入任何内容，name就返回默认的姓氏
  // 如果只传入姓氏，那么就返回姓氏
  // 如果传入姓氏和名字，那么返回来的就是姓名
  // 可选参数使用?
  function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }

  console.log(buildName('王', '小花'))
  console.log(buildName('王'))
  console.log(buildName())
})()
