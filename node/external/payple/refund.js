const axios = require('axios');
const util = require('util');
const authenticationPartner = require('./authenticate-partner');
const { REFUND } = require('./constant')

const refund = async function() {
  const authInfo = await authenticationPartner({ forRefund: true})
  const { cst_id: cstId, custKey, AuthKey: authKey, PCD_PAY_URL } = authInfo
  const uri = `https://democpay.payple.kr${PCD_PAY_URL}`
  const data = {
    PCD_CST_ID: cstId,
    PCD_CUST_KEY: custKey,
    PCD_AUTH_KEY: authKey,
    PCD_REFUND_KEY: REFUND.PCD_REFUND_KEY,
    PCD_PAYCANCEL_FLAG: 'Y',
    PCD_PAY_OID: REFUND.PCD_PAY_OID,
    PCD_PAY_DATE: REFUND.PCD_PAY_DATE,
    PCD_REFUND_TOTAL: REFUND.PCD_REFUND_TOTAL,
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

refund()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)));