const axios = require('axios');
const util = require('util');

const get = async function() {
  const res = await axios.get('https://ingest.twitch.tv/ingests');
  return res;
}

get()
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err =>console.log(util.inspect(err, false, null, true)))
