const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const util = require('util');

const getSubscription = async function (subscriptionId) {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}`, config);
  return response.data
};

getSubscription('').then(res => console.log(util.inspect(res, false, null, true)));
