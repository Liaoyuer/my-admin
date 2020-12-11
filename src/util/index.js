import dayjs from "dayjs"
import { v4 as uuidv4 } from "uuid"
// 获取 LocalStorage
const getLocalStorage = (name) => {
  return window.localStorage.getItem(name)
}
// 设置 LocalStorage
const setLocalStorage = (name, value) => {
  return window.localStorage.setItem(name, value)
}
// 删除 LocalStorage
const removeLocalStorage = (name) => {
  return window.localStorage.removeItem(name)
}
// 清除 LocalStorage
const clearLocalStorage = (name) => {
  console.log(name)
  return window.localStorage.clear()
}

const timeFormat = (str) => {
  const time = dayjs.unix(str).format("YYYY-MM-DD HH:mm:ss")
  return time
}
// 时间差-秒数
const timeDiff = (endTime) => {
  const statTime = dayjs().format("YYYY-MM-DD HH:mm:ss")
  const m1 = dayjs(endTime)
  const m2 = dayjs(statTime)
  return m1.diff(m2, "second")
}
// 当前日期
const dateNow = () => {
  return dayjs().format("YYYY-MM-DD")
}
// 倒计时时间
const timeSet = (time) => {
  const result = ["00", "00", "00"]
  if (time > 0) {
    let theTime = parseInt(time)
    let middle = 0 // 分
    let hour = 0 // 小时
    if (theTime > 60) {
      middle = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)
      if (middle > 60) {
        hour = parseInt(middle / 60)
        middle = parseInt(middle % 60)
      }
    }
    result[2] = parseInt(theTime) < 10 ? "0" + parseInt(theTime) : parseInt(theTime)
    if (middle > 0) {
      result[1] = parseInt(middle) < 10 ? "0" + parseInt(middle) : parseInt(middle)
    }
    if (hour > 0) {
      result[0] = parseInt(hour) < 10 ? "0" + parseInt(hour) : parseInt(hour)
    }
  }
  return result
}
// 对象格式转数组
const objToArr = (data) => {
  const isArr = Array.isArray(data)
  let newArr = []
  if (!isArr) {
    for (const i in data) {
      newArr.push(data[i])
    }
  } else {
    newArr = data
  }
  return newArr
}

const getUserInfo = () => {
  const userInfo = getLocalStorage("userInfo")
  if (userInfo) {
    return JSON.parse(userInfo)
  } else {
    return ""
  }
}
// 生成uuid
const genUUID = () => {
  return uuidv4()
}
const genDatePath = () => {
  return dayjs().format("YYYY-MM-DD");
}

export default {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  timeFormat,
  timeDiff,
  dateNow,
  timeSet,
  objToArr,
  getUserInfo,
  genUUID,
  genDatePath
}
