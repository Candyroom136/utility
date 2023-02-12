const axios = require('axios');
const generateAccessToken = require('./generate-access-token')

async function cancelSubscriptionImmediaately(subscriptionId) {
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
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`, data, config);
  return response.data;
}

cancelSubscriptionImmediaately()
  .then(res => console.log(res));
