const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token');
const { UPDATE_SUBSCRIPTION } = require('./constant');

async function updateSubscription() {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    "plan_id": UPDATE_SUBSCRIPTION.PLAN_ID,
    "application_contest": {
      "return_url": UPDATE_SUBSCRIPTION.RETURN_URL,
      "cancel_url": UPDATE_SUBSCRIPTION.CANCEL_URL
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${UPDATE_SUBSCRIPTION.SUBSCRIPTION_ID}/revise`, data, config);
  return response;
}

updateSubscription()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)));