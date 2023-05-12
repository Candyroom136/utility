const axios = require('axios');
const fs = require('fs')
const util = require('util')
const { SET_VIDEO_THUMBNAIL } = require('./constant')

const setThumbnail = async (data) => {
  const endpoint = `https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${SET_VIDEO_THUMBNAIL.VIDEO_ID}`;
  const config = {
    headers: {
      Authorization: `Bearer ${SET_VIDEO_THUMBNAIL.ACCESS_TOKEN}`,
      'Content-Type': 'application/octet-stream',
      'Content-Length': data.length
    }
  }
  const response = await axios.post(
    endpoint,
    data,
    config
  )
  return response.data;
};

fs.readFile(`${__dirname}/example.jpeg`, (err, data) => {
  if (err) {
    console.log(util.inspect(err, false, null, true));
  } else {
    setThumbnail(data)
      .then(res => console.log(util.inspect(res.data, false, null, true)))
      .catch(err => console.log(util.inspect(err, false, null, true)))
  }
})