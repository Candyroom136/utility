require('dotenv').config()
const querystring = require('querystring');
const axios = require('axios')

const generateAccessToken = async function () {
  const form = { grant_type: 'client_credentials' };
  const config = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    auth: {
      username: process.env.PAYPAL_CLIENT_ID,
      password: process.env.PAYPAL_CLIENT_SECRET,
    },
  };
  const data = querystring.stringify(form);

  const response = await axios
    .post('https://api-m.sandbox.paypal.com/v1/oauth2/token', data, config)
  return response.data;
};

generateAccessToken().then(res => { console.log(res)})

module.exports = generateAccessToken;