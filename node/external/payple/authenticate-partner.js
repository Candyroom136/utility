require('dotenv').config();
const axios = require('axios')

const authenticationPartner = async function({forPay = false, forCancel = false } = {}) {

  const custKey = process.env.PAYPLE_CUST_KEY;
  const cstId = process.env.PAYPLE_CST_ID;
  const referer = 'http://localhost:3010'
  const url = process.env.DEV ? 'https://democpay.payple.kr/php/auth.php' : 'https://cpay.payple.kr/php/auth.php'
  
  const data = {
    cst_id: cstId,
    custKey,
  };

  if (forPay) {
    data.PCD_PAY_TYPE = 'card',
    data.PCD_SIMPLE_FLAG = 'Y'
  } else if (forCancel) {
    data.PCD_PAY_WORK = 'PUSERDEL'
  }

  const config = {
    headers: {
      'content-type': 'application/json',
      'referer': referer
    }
  }

  const res = await axios.post(url, data, config)
  return res.data
}

module.exports = authenticationPartner