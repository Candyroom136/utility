const {  authenticationPartner} = require('./authentication-partner')
const axios = require('axios')

const cancelSubscription = async function(subscriptionId, productName, amount, userId, email) {
  const authInfo = await authenticationPartner({ forPay: true})
  const { cst_id: cstId, custKey, AuthKey: authKey, PCD_PAY_URL } = authInfo
  const uri = `https://democpay.payple.kr${PCD_PAY_URL}`
  const data = {
    "PCD_CST_ID": cstId,
    "PCD_CUST_KEY": custKey,
    "PCD_AUTH_KEY": authKey,
    "PCD_PAY_TYPE": "card",	
    "PCD_PAYER_ID": subscriptionId,		
    "PCD_PAY_GOODS": productName,	
    "PCD_SIMPLE_FLAG": "Y",
    "PCD_PAY_TOTAL": amount,
    "PCD_PAY_ISTAX": "Y",
    "PCD_PAYER_EMAIL": email,
    "PCD_PAYER_NO": userId,
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

cancelSubscription("", "", 999, 1, "")
  .then(res => console.log(res))
  .then(err => console.log(err));