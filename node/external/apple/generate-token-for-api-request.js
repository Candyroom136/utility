const jwt = require('jsonwebtoken')
const { GENERATE_TOKEN_FOR_API_REQUEST } = require('./constant')

const generateTokenForApiRequest = function() {
  const { PRIVATE_KEY, PRIVATE_KEY_ID, ISSUER_ID, BUNDLE_ID} = GENERATE_TOKEN_FOR_API_REQUEST
  const now = new Date().getTime() / 1000;
  const option = {
    "algorithm": "ES256",
    "header": {
      "alg": "ES256",
      "kid": PRIVATE_KEY_ID,
      "typ": "JWT"
    }
  }
  const payload = {
    "iss": ISSUER_ID,
    "iat": now,
    "exp": now + 60*60,
    "aud": "appstoreconnect-v1",
    "bid": BUNDLE_ID
  };

  const token = jwt.sign(payload, PRIVATE_KEY, option);
  return token;
}

module.exports = generateTokenForApiRequest

