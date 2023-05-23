const axios = require('axios')
const util = require('util')
const authenticationPartner = require('./authenticate-partner')
const { CANCEL_SUBSCRIPTION } = require('./constant')

const cancelSubscription = async function() {
  const authInfo = await authenticationPartner({ forCancel: true})
  const { cst_id: cstId, custKey, AuthKey: authKey, PCD_PAY_URL } = authInfo
  const uri = `https://democpay.payple.kr${PCD_PAY_URL}`
  const data = {
    "PCD_CST_ID": cstId,
    "PCD_CUST_KEY": custKey,
    "PCD_AUTH_KEY": authKey,
    "PCD_PAYER_ID": CANCEL_SUBSCRIPTION.SUBSCRIPTION_ID	
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
  .catch(err => console.log(util.inspect(err, false, null ,true)));