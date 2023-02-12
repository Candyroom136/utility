const token='';
const jwt = require('jsonwebtoken')

jwt.verify(token, 'password', async (err, decoded) => {
  if (err) {
    console.log(err)
  }
  if (decoded) {
    console.log(decoded)
  }
});