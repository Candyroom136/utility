const short = require('short-uuid')

const a = short.generate();

console.log('원본: ', a);
console.log('pw: ', a.slice(0,16) )
const b = a.toUpperCase();
console.log('code: ', `${b.slice(0, 4)}-${b.slice(4, 8)}-${b.slice(8, 12)}-${b.slice(12,16)}`.replaceAll('Q', 'O'))