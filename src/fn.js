// 性能测试
module.exports = {
  loop1: arr => {
    arr.forEach(i => i + 1)
  },
  loop2: arr => {
    arr.map(i => i + 1)
  },
  loop3: arr => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      arr[i] += 1
    }
  }
}
