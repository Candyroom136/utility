const axios = require('axios');
const util = require('util');
const generateAccessToken = require('./generate-access-token')
const { VERIFY_WEBHOOK_SIGNATURE } = require('./constant')

const verifyWebhookSignature = async function () {
  const { access_token: accessToken } = await generateAccessToken();

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const data = {
    auth_algo: VERIFY_WEBHOOK_SIGNATURE.AUTH_ALGO,
    cert_url: VERIFY_WEBHOOK_SIGNATURE.CERT_URL,
    transmission_id: VERIFY_WEBHOOK_SIGNATURE.TRANSMISSION_ID,
    transmission_sig: VERIFY_WEBHOOK_SIGNATURE.TRANSMISSION_SIG,
    transmission_time: VERIFY_WEBHOOK_SIGNATURE.TRANSMISSION_TIME,
    webhook_event: VERIFY_WEBHOOK_SIGNATURE.WEBHOOK_EVENT,
    webhook_id: VERIFY_WEBHOOK_SIGNATURE.WEBHOOK_ID,
  };

  const response = await axios.post(`https://api-m.sandbox.paypal.com/v1/notifications/verify-webhook-signature`, data, config)
  return response;
};

verifyWebhookSignature()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)));