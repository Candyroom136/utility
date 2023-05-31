const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token')
const { GET_SALE } = require('./constant')

async function getSale() {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.get(`https://api-m.sandbox.paypal.com/v2/payments/captures/${GET_SALE.SALE_ID}`, config);
  return response;
}

getSale()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))