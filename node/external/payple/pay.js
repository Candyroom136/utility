const axios = require('axios');
const util = require('util');
const authenticationPartner = require('./authentication-partner');
const { PAY } = require('./constant')

const cancelSubscription = async function() {
  const authInfo = await authenticationPartner({ forPay: true})
  const { cst_id: cstId, custKey, AuthKey: authKey, PCD_PAY_URL } = authInfo
  const uri = `https://democpay.payple.kr${PCD_PAY_URL}`
  const data = {
    "PCD_CST_ID": cstId,
    "PCD_CUST_KEY": custKey,
    "PCD_AUTH_KEY": authKey,
    "PCD_PAY_TYPE": "card",	
    "PCD_PAYER_ID": PAY.SUBSCRIPTION_ID,		
    "PCD_PAY_GOODS": PAY.PRODUCT_NAME,	
    "PCD_SIMPLE_FLAG": "Y",
    "PCD_PAY_TOTAL": PAY.AMOUNT,
    "PCD_PAY_ISTAX": "Y",
    "PCD_PAYER_EMAIL": PAY.EMAIL,
    "PCD_PAYER_NO": PAY.USER_ID,
  }
  const config = {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "referer": "http://localhost:3010"
    }
  }
  const res = await axios.post(uri, data, config);
  return res;
}

cancelSubscription()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .then(err => console.log(util.inspect(err, false, null, true)));