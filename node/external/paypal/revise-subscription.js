const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token');
const { REVISE_SUBSCRIPTION } = require('./constant');

async function updateSubscription() {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const data = {
    plan_id: REVISE_SUBSCRIPTION.PLAN_ID,
    application_context: {
      return_url: REVISE_SUBSCRIPTION.RETURN_URL,
      cancel_url: REVISE_SUBSCRIPTION.CANCEL_URL,
    },
  };

  if (REVISE_SUBSCRIPTION.PRICE) {
    data.plan = {
      billing_cycles: [
        {
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: {
            fixed_price: {
              currency_code: 'USD',
              value: REVISE_SUBSCRIPTION.PRICE
            }
          }
        }
      ]
    }
  }
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${REVISE_SUBSCRIPTION.SUBSCRIPTION_ID}/revise`, data, config);
  return response;
}

updateSubscription()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)));