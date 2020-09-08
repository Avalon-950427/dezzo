const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const debounce = (fun, delay = 500) => {
  // 防抖函数
  return function (args) {
      let that = this
      let _args = args
      clearTimeout(fun.id)
      fun.id = setTimeout(function () {
          fun.call(that, _args)
      }, delay)
  }
}

const throttle = (fn, delay = 500) => {
  // 节流函数
  let last, deferTimer
  return function (args) {
      let that = this
      let _args = arguments
      let now = +new Date()
      if (last && now < last + delay) {
          clearTimeout(deferTimer)
          deferTimer = setTimeout(function () {
              last = now
              fn.apply(that, _args)
          }, delay)
      }else {
          last = now
          fn.apply(that,_args)
      }
  }
}

/**
 * 二分查找函数
 * @param {*} arr 已排好的数组
 * @param {*} key 想要查找的值
 */
function binarySearch(arr, key) {
  var low = 0,
      high = arr.length - 1;
  while (low <= high) {
      var mid = parseInt((high + low) / 2);
      if (key == arr[mid]) {
          return mid;
      } else if (key > arr[mid]) {
          if(key < arr[mid+1]){
            return mid;
          }
          low = mid + 1;
      } else if (key < arr[mid]) {
          if( key > arr[mid-1] ){
            return mid - 1;
          }
          high = mid - 1;
      } else {
          return -1;
      }
  }
}

module.exports = {
  formatTime,
  debounce,
  throttle,
  binarySearch,
}
