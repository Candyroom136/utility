const axios = require('axios')
const util = require('util')
const { REVOKE_TOKEN } = require('./constant')


const url = `https://oauth2.googleapis.com/revoke`
const data = null;
const config = {
  headers: {
    "Content-type": "Content-type:application/x-www-form-urlencoded"
  },
  params: {
    token: REVOKE_TOKEN.REFRESH_TOKEN
  }
}

 axios.post(url, data, config)
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))
