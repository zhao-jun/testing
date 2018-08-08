const {should, expect, assert} = require('chai');
const {add} = require('../src/math');

// 断言库chai BDD/TDD 双模 ,同时支持 should / expect / assert

// should
should();
add(2, 5).should.equal(7)

// expect
expect(add(2, 5)).to.equal(7)

// assert
assert.equal(add(2, 5), 7)