const jws = require('jws');

const decodeJWS = function ({ encodedJWS }) {
  const decodedData = jws.decode(encodedJWS);
  if (!decodedData) {
    throw new ChargeSaitServiceError('payload를 decode할 수 없습니다.', 400);
  }
  return JSON.parse(decodedData.payload);
};

const encodedJWS = '';

const decodedJWS = decodeJWS({ encodedJWS })
console.log(decodedJWS)