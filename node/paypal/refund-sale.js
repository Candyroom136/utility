const axios = require('axios');
const generateAccessToken = require('./generate-access-token')

async function refundSale(saleId) {
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
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/payments/captures/${saleId}/refund`, data, config);
  return response;
}

refundSale('')
  .then(res => console.log(res.data));
