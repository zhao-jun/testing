const assert = require('assert');
const {add} = require('../src/math');

// node提供的断言API assert
// 相等== 不输出 不相等 输出message
assert.equal(add(2, 3), '5', '不相等');
assert.equal(add(2, 4), '5', '不相等');
