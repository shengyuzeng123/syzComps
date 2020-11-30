export default {
  //深拷贝
  deepCopy(obj) {
    if (!obj || typeof obj !== 'object') return false;
    let obj_clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          obj_clone = this.deepCopy(obj[key])
        } else {
          obj_clone = obj[key]
        }
      }
    }
    return obj_clone
  },
  //函数防抖(在一定时间内只能触发一次，如果在冷却时间内再次触发，则会重新计算时间后再执行)
  debounce(f, wait) {
    let timer;
    let waitTime = wait || 1000;
    return function () {
      let args = arguments;
      // 如果上一个等待还未完成又触发了事件，刷新等待时间重新等待
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        f.apply(this, args)
      }, waitTime)
    }
  },
  // 函数节流（限制一定时间内函数触发的频率）
  throttle(f, wait) {
    let timeout;
    let waitTime = wait || 200;
    return function () {
      let args = arguments;
      let context = this
      // 只有当上一次事件完成后才会触发下一次事件
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          f.apply(context, args)
        }, waitTime)
      }
    }
  },
  // 数组去重（filter版）
  distinct_filter(a, b) {
    let arr = a.concat(b);
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
  },
  // 数组去重（ES6版）
  distinct_es6(arr) {
    return [...new Set(arr)]
  }
}
