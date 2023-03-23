const axios = require('axios');
const generateAccessToken = require('./generate-access-token')
require('dotenv').config()

const verifyWebhookSignature = async function ({
  paypalAuthAlgo,
  paypalCertUrl,
  paypalTransmissionId,
  paypalTransmissionSig,
  paypalTransmissionTime,
  webhookEvent,
}) {
  const { access_token: accessToken } = await generateAccessToken();
  const paypalWebhookId = process.env.PAYPAL_WEBHOOK_ID;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const data = {
    auth_algo: paypalAuthAlgo,
    cert_url: paypalCertUrl,
    transmission_id: paypalTransmissionId,
    transmission_sig: paypalTransmissionSig,
    transmission_time: paypalTransmissionTime,
    webhook_event: webhookEvent,
    webhook_id: paypalWebhookId,
  };

  const response = await axios
    .post(`https://api-m.sandbox.paypal.com/v1/notifications/verify-webhook-signature`, data, config)
    .then(res => res)
    .catch(err => {
      adaptorErrorHandler({ err });
      return { data: { verificatin_status: 'FAIL' } };
    });

  return response.data;
};

verifyWebhookSignature('', '', '', '', '', '')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

//현재 plan period완료후 갱신됨.