// mocha本身不带断言库，本例中使用chai
// --reporter spec指定测试报告的格式，默认spec，可以指定tap、nyan等
// 命令行不配置参数可以在mocha.opts配置
const {should, expect, assert} = require('chai');
const {add, mul} = require('../src/math');

describe('math测试', () => {
  describe('加法测试', () => {
    it('should return 5 when 2 + 5', () => {
      expect(add(2, 5)).to.equal(7)
    })
    it('should return -1 when 2 - 3', () => {
      expect(add(2, -3)).to.equal(-1)
    })
  })

  describe('乘法测试', () => {
    it('should return 6 when 2 + 3', () => {
      expect(mul(2, 3)).to.equal(6)
    })
    it('should return 14 when 2 * 7', () => {
      expect(mul(2, 7)).to.equal(14)
    })
  })
})
