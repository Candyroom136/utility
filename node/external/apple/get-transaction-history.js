require('dotenv').config()
const axios = require('axios');
const util = require('util');
const { GET_TRANSACTION_HISTORY } = require('./constant')
const generateTokenForApiRequest = require('./generate-token-for-api-request')
const decodeJWS = require('./decode-jws')

const { ORIGINAL_TRANSACTION_ID } = GET_TRANSACTION_HISTORY
let endpoint = '';
if (process.env.DEV) {
  endpoint = `https://api.storekit-sandbox.itunes.apple.com/inApps/v1/history/${ORIGINAL_TRANSACTION_ID}`
} else {
  endpoint = `https://api.storekit.itunes.apple.com/inApps/v1/history/${ORIGINAL_TRANSACTION_ID}`
}
const token = generateTokenForApiRequest();
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

axios.get(endpoint, config)
  .then(res => {
    res.data.signedTransactions.forEach(cur => {
      const history = decodeJWS(cur)
      console.log(util.inspect(history, false, null, true))
    })
  })
  .catch(err => console.log(util.inspect(err, false, null, true)))