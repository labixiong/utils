/**
 * 题目要求：
 * transform([
    { id: 1, name: '111', parentId: -1 },
    { id: 2, name: '222', parentId: 1 },
    { id: 3, name: '333', parentId: 2 },
    { id: 4, name: '444', parentId: 3 }
  ])

  输出为：
  {
    id: 1,
    name: '111',
    parentId: -1,
    children: [
      {
        id: 2,
        name: '222',
        parentId: 1,
        children: [
          {
            id: 3,
            name: '333',
            parentId: 2,
            children: [
              ...
            ]
          }
        ]
      }
    ]
  }

  书写transform方法，将列表修改为树形数据
 * @param {*} list 对象数组
 * @returns object
 */
function transform(list) {
  // 边界判断，如果list不是数组或者list长度为0，则直接把传入的数据返回
  if(!Array.isArray(list) || !list.length) return list

  let result = []

  function recursive(parentId, result) {
    let findItem = list.find(item => item.parentId === parentId)
    if(findItem) {
      result.push(findItem)
      findItem.children = []

      // 尾调用优化递归
      return recursive(findItem.id, findItem.children)
    }
  }

  recursive(-1, result)

  return result[0]
}

// const list = [
//   { id: 1, name: '111', parentId: -1 },
//   { id: 2, name: '222', parentId: 1 },
//   { id: 3, name: '333', parentId: 2 },
//   { id: 4, name: '444', parentId: 3 }
// ]

// console.log(transform(list));

module.exports = transform