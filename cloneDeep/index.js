/**
 * 深拷贝函数
 * @param {*} source 数据或者对象，目前不支持Map、Set、WeakSet、WeakMap
 * @returns
 */
function cloneDeep(source) {
  let objStr = '[object Object]'
  let arrStr = '[object Array]'
  let objToStr = Object.prototype.toString
  // 根据对应的值初始化
  let result = objToStr.call(item) === objStr ? {} : []

  // 递归
  function recursive(source, result) {
    // for..in也可以遍历数组，key就是数组的索引
    for (const key in source) {
      const item = source[key]
      result[key] = objToStr.call(item) === objStr ? {} : []
      if([arrStr, objStr].includes(objToStr.call(item))) {
        recursive(item, result[key])
      } else {
        result[key] = item
      }
    }
  }

  recursive(source, result)
 
  return result
}

// 测试用例
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     e: 4,
//     f: 5,
//     g: {
//       h: 6
//     }
//   },
//   i: [1,2,3,4,5],
//   j: [
//     {
//       k: 7,
//       l: 8,
//       m: 9
//     }
//   ]
// }

// const arr = [
//   [2,3,4],
//   {
//     a: 1
//   }
// ]

module.exports = cloneDeep