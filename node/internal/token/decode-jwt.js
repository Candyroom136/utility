const jwt = require('jsonwebtoken')
const util = require('util');
const { DECODE_JWT } = require('./constant')

jwt.verify(DECODE_JWT.TOKEN, DECODE_JWT.PASSWORD, (err, data) => {
  if (err) {
    console.log(util.inspect(err, false, null, true));
  }
  if (data) {
    console.log(util.inspect(data, false, null, true));
  }
});