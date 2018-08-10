// 单元测试
module.exports = {
    add: (...args) => args.reduce((prev, curr) => prev + curr),

    mul: (...args) => args.reduce((prev, curr) => prev * curr),
    // 测试istanbul覆盖率
    cover: (a, b) => {
      if (a > b) {
        return a - b
      } else if (a == b) {
        return 0
      } else {
        return min(a, b)
      }
    }
}

const min = (a, b) => b - a
