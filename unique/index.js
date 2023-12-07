/**
 * 数组去重
 * @param {*} source Array
 */
function unique(source) {
  if(!Array.isArray(source)) return source

  let len = source.length
  let objToStr = Object.prototype.toString
  let objStr = '[object Object]'
  let arrStr = '[object Array]'
  let map = new Map()

  // map.set(1, { a: 1 })
  // map.set(2, { a: 1 })

  for (let i = 0; i < len; i++) {
    
    const x = source[i]
    let j = i + 1

    map.set(i, x)

    while(source[j]) {
      if(!map.has(j)) {
        map.set(j, source[j])
      } else {
        let value = map.get(j)
        // console.log(value, 'value');
        if(value !== undefined) {
          // 如果有值，则判断类型
          if([objStr, arrStr].includes(objToStr.call(value))) {
            // console.log('有值，且为引用类型');
            // 判断两个对象是否相等，如果相等则删除，如果不相等则添加
            for (const [k, v] of map) {
              if(v.toString() === value.toString()) {
                map.delete(k)
              }
            }
          } else {
            map.delete(j)
          }
        }
        j+= 1
      }
    }
  }
  return Array.from(map.values())
}

const arr = [1,2,3,{a: 1, b: { c: 2 }}, {a: 1, b: { c: 2 }}]
console.log(unique(arr));

module.exports = unique