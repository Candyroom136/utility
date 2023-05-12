const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token')
const { CANCEL_SUBSCRIPTION_IMMEDIATELY } = require('./constant')

async function cancelSubscriptionImmediaately() {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    reason: "Service is not for me"
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${CANCEL_SUBSCRIPTION_IMMEDIATELY.SUBSCRIPTION_ID}/cancel`, data, config);
  return response;
}

cancelSubscriptionImmediaately()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(utll.inspect(err, false, null, true)))
