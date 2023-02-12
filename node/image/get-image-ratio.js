const axios = require('axios');
const sizeOf = require('image-size');

const getImageRatio = async function (imageUrl) {
  const config = {
    responseType: 'arraybuffer',
  };
  const response = await axios.get(imageUrl, config);
  const buffer = response.data;
  const { height, width } = await sizeOf(buffer);
  console.log(height, width)
  const ratio = height / width;
  console.log(ratio)
  return ratio;
};

getImageRatio('https://yt3.ggpht.com/ytc/AMLnZu-OoCj8oG4hssfpUAvZ5EPCjBu21krVcB6tkVFsQA=s68-c-k-c0x00ffffff-no-rj')

