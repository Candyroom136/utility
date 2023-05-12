const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token')
const { REFUND_SALE} = require('./constant')

async function refundSale() {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    amount: {
      currency_code: 'USD',
      value: 9.40
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/payments/captures/${REFUND_SALE.SALE_ID}/refund`, data, config);
  return response;
}

refundSale()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))
