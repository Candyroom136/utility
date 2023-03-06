const {  authenticationPartner} = require('./authentication-partner')
const axios = require('axios')

const cancelSubscription = async function(subscriptionId) {
  const authInfo = await authenticationPartner({ forCancel: true})
  const { cst_id: cstId, custKey, AuthKey: authKey, PCD_PAY_URL } = authInfo
  const uri = `https://democpay.payple.kr${PCD_PAY_URL}`
  const data = {
    "PCD_CST_ID": cstId,
    "PCD_CUST_KEY": custKey,
    "PCD_AUTH_KEY": authKey,
    "PCD_PAYER_ID": subscriptionId,		
  }
  const config = {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "referer": "http://localhost:3010"
    }
  }
  console.log(uri)
  console.log(data);
  console.log(config)

  const res = await axios.post(uri, data, config);
  return res.data;

}

cancelSubscription("")
  .then(res => console.log(res))
  .then(err => console.log(err));