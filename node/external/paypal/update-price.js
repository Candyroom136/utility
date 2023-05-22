const axios = require('axios');
const util = require('util')
const generateAccessToken = require('./generate-access-token');
const { UPDATE_PRICE } = require('./constant')

async function updatePrice() {
  const { access_token: accessToken } = await generateAccessToken();
  const data = [{
      op: 'replace',
      path: '/plan/billing_cycles/@sequence==1/pricing_scheme/fixed_price',
      value: {
        currency_code: "USD",
        value: "9.99"
      } 
    }
  ];
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.patch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${UPDATE_PRICE.SUBSCRIPTION_ID}`, data, config);
  return response.status;
}

updatePrice()
  .then(res => console.log(util.inspect(res, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))