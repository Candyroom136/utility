const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const { CREATE_SUBSCRIPTION } = require('./constant')
const util  = require('util');

async function createSubscription() {
  const { access_token: accessToken } = await generateAccessToken();
  const data = {
    "plan_id": CREATE_SUBSCRIPTION.PLAN_ID,
    "custom_id": CREATE_SUBSCRIPTION.CUSTOM_ID,
    "plan": {
      "billing_cycles": [
        {
          "sequence": 1,
          "pricing_scheme": {
            "fixed_price": {
              "currency_code": "USD",
              'value': "9.99"
            }
          }
        }
      ],
    },
    application_context: {
      return_url: '', 
      cancel_url: '', 
      shipping_preference: 'NO_SHIPPING'
    }
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

createSubscription()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)));