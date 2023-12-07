const { typeConstant } = require('../constant/index')

const objToStr = Object.prototype.toString

// 判断类型是普通类型还是引用类型,不能判断具体的类型
function checkType(type, isCommon) {
  return isCommon ? typeConstant.COMMOM_TYPE.includes(type) : typeConstant.RECOMMEND_TYPE.includes(type)
}

/**
 * 判断两个数组长度或者对象的keys长度是否相等
 * @param {*} data1 
 * @param {*} data2 
 */
function checkLen(data1, data2, type) {
  return type === typeConstant.ARRAY_TYPE ? Object.is(data1.length, data2.length) : Object.is(Object.keys(data1).length, Object.keys(data2).length)
}

// 遍历引用类型
// 目前只考虑对象和数组
function isEqual(data1, data2) {
  if(objToStr.call(data1) !== objToStr.call(data2)) {
    return false
  }
  return recursive(data1, data2)
}

// 深度遍历
function recursive(data1, data2) {
  let flag = false

  // 判断两个数组长度或者对象的keys长度是否相等,不相等的话直接返回false,如果相等再进行下面的判断
  if(!checkLen(data1, data2, objToStr.call(data1))) {
    return false
  }

  for (const key in data1) {
    // 当前的值
    const value1 = data1[key]
    const value2 = data2[key]
    const value1Type = objToStr.call(value1)
    const value2Type = objToStr.call(value2)

    // 类型相同
    // 进行类型判断
    if(value1Type === value2Type) {
      // 基本类型
      if(checkType(value1Type, true)) {
        flag = Object.is(value1, value2)
      } else {
        // 检查数组索引或者对象keys的长度是否相等
        if(checkLen(value1, value2, value1Type)) {
          // 相等的话再进行判断
          recursive(value1, value2)
        } else {
          // 不相等就是false
          flag = false
        }
      }
    } else {
      // 类型不相同
      flag = false
    }
  }

  return flag
}

module.exports = {
  isEqual
}