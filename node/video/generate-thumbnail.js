const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg'); 
const sharp = require('sharp')
ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require('fs')

const generateThumnail = async function(videoUrl) {
  const splitedUrl = videoUrl.split('/');
  const fileName = splitedUrl[splitedUrl.length - 1].split('.')[0] + '.jpg';

  const ffmpegInstance = new ffmpeg(videoUrl)
  
  ffmpegInstance
  .on('error', function(error) {
    console.log(error)
  })
  .on('end', function(end) {
    sharp(`./${fileName}`)
    .toBuffer({ resolveWithObject: true})
    .then(async ({ data, info }) => {
      fs.unlinkSync(`./${fileName}`, (error) => {
        console.log(error)
      });
      //data => image데이터 
      console.log(data)
      return result

    })
    .catch(error => {
      console.log(error)
    })
  })
  .screenshots({
      filename: fileName,
      folder: './',
      count: 1,
      timemarks: [ '1' ] // number of seconds
  })
}

generateThumnail('video url주소')
