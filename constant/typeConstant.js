// 类型常量
const NUMBER_TYPE = '[object Number]'
const STRING_TYPE = '[object String]'
const UNDEFINED_TYPE = '[object Undefined]'
const NULL_TYPE = '[object Null]'
const BOOLEAN_TYPE = '[object Boolean]'
const SYMBOL_TYPE = '[object Symbol]'
const BIGINT_TYPE = '[object BigInt]'
const REGEXP_TYPE = '[object RegExp]'
const OBJECT_TYPE = '[object Object]'
const ARRAY_TYPE = '[object Array]'
const FUNCTION_TYPE = '[object Function]'
const DATE_TYPE = '[object Date]'

const TYPE_OBJ = {
  NUMBER_TYPE,
  STRING_TYPE,
  UNDEFINED_TYPE,
  NULL_TYPE,
  BOOLEAN_TYPE,
  SYMBOL_TYPE,
  BIGINT_TYPE,
  REGEXP_TYPE,
  OBJECT_TYPE,
  ARRAY_TYPE,
  FUNCTION_TYPE,
  DATE_TYPE
}

const COMMOM_TYPE = [NUMBER_TYPE, STRING_TYPE, UNDEFINED_TYPE, NULL_TYPE, BOOLEAN_TYPE, ]
const RECOMMEND_TYPE = []

for (const [key, value] of Object.entries(TYPE_OBJ)) {
  if(!COMMOM_TYPE.includes(value)) {
    RECOMMEND_TYPE.push(value)
  }
}

module.exports = {
  ...TYPE_OBJ,
  COMMOM_TYPE,
  RECOMMEND_TYPE
} 
