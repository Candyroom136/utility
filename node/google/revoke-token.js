const axios = require('axios')
require('dotenv').config();

const revokeToken = async function(refreshToken) {
  const url = `https://oauth2.googleapis.com/revoke`
  const data = null;
  const config = {
    headers: {
      "Content-type": "Content-type:application/x-www-form-urlencoded"
    },
    params: {
      token: refreshToken
    }
  }

  const response = await axios.post(url, data, config)
  return response
}

const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
revokeToken(refreshToken)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })