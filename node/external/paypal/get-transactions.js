const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
const util = require('util');
const { GET_TRANSACTIONS } = require('./constant')

const getTransactions = async function () {
  const { access_token: accessToken } = await generateAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    params: {
      start_time: '2023-03-27T00:00:00Z',
      end_time: '2023-03-29T00:00:00Z',
    }
  };
  const response = await axios.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${GET_TRANSACTIONS.SUBSCRIPTION_ID}/transactions`, config);
  return response
};

getTransactions()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))