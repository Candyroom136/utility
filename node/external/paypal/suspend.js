const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const util = require('util');
const { SUSPEND } = require('./constant')

const suspend = async function () {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${SUSPEND.SUBSCRIPTION_ID}/suspend`, null, config);
  return response
};

suspend()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))