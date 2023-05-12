const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token')
const { GET_CUSTOMER_PORTAL} = require('./constant')

async function getCustomerPortalLink() {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.get(`https://api-m.sandbox.paypal.com/v1/payments/billing-agreements/${GET_CUSTOMER_PORTAL.AGREEMENT_ID}`, config);
  return response;
}

getCustomerPortalLink()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))