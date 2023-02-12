const axios = require('axios');
const generateAccessToken = require('./generate-access-token')

async function createSubscription(subscriptionId, planId, customId) {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    "plan_Id": planId,
    "custom_id": customId
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions`, data, config);
  return response;
}

createSubscription('', '', '')
  .then(res => console.log(res.data));

//현재 plan period완료후 갱신됨.