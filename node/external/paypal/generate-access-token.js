const querystring = require('querystring');
const axios = require('axios')
const { GENERATE_ACCESS_TOKEN } = require('./constant')

const generateAccessToken = async function () {
  const form = { grant_type: 'client_credentials' };
  const config = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    auth: {
      username: GENERATE_ACCESS_TOKEN.CLIENT_ID,
      password: GENERATE_ACCESS_TOKEN.CLIENT_SECRET
    },
  };
  const data = querystring.stringify(form);

  const response = await axios
    .post('https://api-m.sandbox.paypal.com/v1/oauth2/token', data, config)
  return response.data;
};

module.exports = generateAccessToken;