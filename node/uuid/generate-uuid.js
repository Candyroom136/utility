const short = require('short-uuid')

const a = short.generate();

console.log('원본: ', a);
console.log('pw: ', a.slice(0,12) )