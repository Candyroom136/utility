const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const util = require('util')

async function cancelSubscriptionAtPeriodEnd(subscriptionId) {
  const { access_token: accessToken } = await generateAccessToken();
  const data = [{
      op: 'replace',
      path: '/plan/billing_cycles/@sequence==1/total_cycles',
      value: 1
    }
  ];
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await axios.patch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}`, data, config);
  return response.data;
}

cancelSubscriptionAtPeriodEnd()
  .then(res => console.log(util.inspect(res, false, null, true)))
