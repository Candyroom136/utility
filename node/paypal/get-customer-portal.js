const axios = require('axios');
const generateAccessToken = require('./generate-access-token')

async function getCustomerPortalLink(agreementId) {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.get(`https://api-m.sandbox.paypal.com/v1/payments/billing-agreements/${agreementId}`, config);
  return response;
}

getCustomerPortalLink()
  .then(res => console.log(res));