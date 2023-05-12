const axios = require('axios');
const sizeOf = require('image-size');
const { GET_IMAGE_RATIO } = require('./constant')


const getImageRatio = async function () {
  const config = {
    responseType: 'arraybuffer',
  };
  const response = await axios.get(GET_IMAGE_RATIO.URL, config);
  const buffer = response.data;
  const { height, width } = await sizeOf(buffer);
  console.log(height, width)
  const ratio = height / width;
  console.log(ratio)
  return ratio;
};

getImageRatio()

