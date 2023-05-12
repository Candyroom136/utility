const axios = require('axios');
const util = require('util');
const data = {
  file_name: '207206-1683875167515.png',
  key_prefix: 'album',
  bucket_name: 'mindlogic-opentown-story-image'
}

axios.post('http://mindlogic-vectorprovider.ap-northeast-2.elasticbeanstalk.com/image-sensitive', data, { timeout: 3000 })
  .then(res => console.log(util.inspect(res.data, false, null, true)))
  .catch(err => console.log(util.inspect(err, false, null, true)))

