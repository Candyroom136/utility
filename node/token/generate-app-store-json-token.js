const jwt = require('jsonwebtoken')
const now = new Date().getTime() / 1000;

const privatekey = '';
const option = {
  "algorithm": "ES256",
  "header": {
    "alg": "ES256",
    "kid": "2W5GHL7T46",
    "typ": "JWT"
  }
}
const payloadForNotificationTest = {
  "iss": "",
  "iat": now,
  "exp": now + 20*60,
  "aud": "appstoreconnect-v1",
  "bid": ""
};
const payloadForTransaction = {
  "transactionId": "2000000138297211",
  "originalTransactionId": "2000000138297211",
  "bundleId": "",
  "productId": "",
  "purchaseDate": 1661161555000,
  "originalPurchaseDate": 1661161555000,
  "quantity": 1,
  "type": "Consumable",
  "inAppOwnershipType": "PURCHASED",
  "signedDate": 1661348161351,
  "revocationReason": 0,
  "revocationDate": 1661347232000,
  "environment": "Production"
}
const signedTransactionInfo = jwt.sign(payloadForTransaction, privatekey, option)
const payloadForRefundTest = {
  "notificationType":"OFFER_REDEEME",
  "notificationUUID":"",
  "subType": "UPGRADE",
  "data": {
    "appAppleId":1557176146,
    "bundleId": "",
    "bundleVersion":"220820.1.7",
    "environment":"Production",
    "signedTransactionInfo": signedTransactionInfo
  },
  "version":"2.0",
  "signedDate":1661348161377
}
const tokenForAppStoreNotificationTest = jwt.sign(payloadForNotificationTest, privatekey, option);
console.log('알림 테스트 토큰 ', tokenForAppStoreNotificationTest)
