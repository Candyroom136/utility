const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg'); 
const sharp = require('sharp')
ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require('fs')
const util = require('util')
const {GENERATE_THUMBNAIL } = require('./constant')

const generateThumnail = async function() {
  const splitedUrl = GENERATE_THUMBNAIL.URL.split('/');
  const fileName = splitedUrl[splitedUrl.length - 1].split('.')[0] + '.jpg';

  const ffmpegInstance = new ffmpeg(GENERATE_THUMBNAIL.URL)
  
  ffmpegInstance
  .on('error', function(err) {
    console.log(util.inspect(err, false, null, true))
  })
  .on('end', function(end) {
    sharp(`./${fileName}`)
    .toBuffer({ resolveWithObject: true})
    .then(async ({ data, info }) => {
      fs.unlinkSync(`./${fileName}`, (err) => {
        console.log(util.inspect(err, false, null, true));
      });
      //data => image데이터 
      console.log(util.inspect(data, false, null, true));
      return result

    })
    .catch(err => {
      console.log(util.inspect(err, false, null, true));
    })
  })
  .screenshots({
      filename: fileName,
      folder: './',
      count: 1,
      timemarks: [ '1' ] // number of seconds
  })
}

generateThumnail();
