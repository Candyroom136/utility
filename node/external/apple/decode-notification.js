const util =require('util')
const decodeJWS = require('./decode-jws')
const { DECODE_NOTIFICATION } = require('./constant')

const { NOTIFICATION_TO_DECODE } = DECODE_NOTIFICATION

const decodeNotification = function(jws) {
  const decodedPayload = jws.decodeJWS(jws);
  if (decodedPayload.data.signedTransactionInfo) {
    decodedPayload.data.signedTransactionInfo = decodeJWS(decodedPayload.data.signedTransactionInfo);
  }
  if (decodedPayload.data.signedRenewalInfo) {
    decodedPayload.data.signedRenewalInfo = decodeJWS(decodedPayload.data.signedRenewalInfo);
  }

  console.log(util.inspect(decodedPayload, false, null, true))
}

decodeNotification(NOTIFICATION_TO_DECODE)