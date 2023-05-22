const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const util = require('util');
const { ACTIVATE } = require('./constant')

const activate = async function () {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  };
  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${ACTIVATE.SUBSCRIPTION_ID}/activate`, null, config);
  return response
};

activate()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))