const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs')
require('dotenv').config();
const util = require('util')

const setThumbnail = async (videoId, accessToken, imageData) => {
  const endpoint = `https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${videoId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/octet-stream',
      'Content-Length': imageData.length
    }
  }
  const response = await axios.post(
    endpoint,
    imageData,
    config
  )
  .then(res => res)
  .catch(err => {
    console.log(util.inspect(err.response.data, false, null, true))
  })
  return response.data;
};

// Usage example
const videoId = '';
const accessToken = process.env.GOOGLE_ACCESS_TOKEN;
const imageData = fs.readFileSync('./static-storage/image/yellow-thumbnail.jpeg');

console.log(setThumbnail(videoId, accessToken, imageData));
