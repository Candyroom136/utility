const axios = require('axios');
const generateAccessToken = require('./generate-access-token')

async function updateSubscription(subscriptionId, planId, returnUrl, cancelUrl) {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    "plan_id": planId,
    "application_contest": {
      "return_url": returnUrl,
      "cancel_url": cancelUrl
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/revise`, data, config);
  return response;
}

updateSubscription('', '', '', '')
  .then(res => console.log(res.data));

//현재 plan period완료후 갱신됨.