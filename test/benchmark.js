const {loop1, loop2, loop3} = require('../src/fn');
const Benchmark = require('benchmark');

// 原始的性能测试
// let arr = [...Array(1000000)].map((_, i) => i + 1);

// console.time('loop1')
// loop1(arr)
// console.timeEnd('loop1')

// console.time('loop2')
// loop2(arr)
// console.timeEnd('loop2')

// console.time('loop3')
// loop3(arr)
// console.timeEnd('loop3')

// Benchmark性能测试
const suite = new Benchmark.Suite;
let arr = [...Array(1000000)].map((_, i) => i + 1);

suite.add('forEach循环', () => {
  loop1(arr)
})
.add('map循环', () => {
  loop2(arr)
})
.add('for循环', () => {
  loop3(arr)
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
})
.run({ 'async': true });
