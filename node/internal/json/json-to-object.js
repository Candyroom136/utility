const util = require('util');
const { JSON_TO_OBJECT } = require('./constant')

const object = JSON.parse(JSON_TO_OBJECT.JSON);
console.log(util.inspect(object, false, null, true))