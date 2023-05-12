const jws = require('jws');

const decodeJWS = function (token) {
  const decodedObject = jws.decode(token);
  return JSON.parse(decodedObject.payload);
};

module.exports = decodeJWS