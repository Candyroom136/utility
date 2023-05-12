const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');
const util = require('util');
const { GET_VIDEO_RATIO } = require('./constant')

const getVideoRatio = async function () {
  const fileMetaData = await ffprobe(GET_VIDEO_RATIO.URL, { path: ffprobeStatic.path });
  console.log(fileMetaData)
  const streams = fileMetaData?.streams;
  const firstStream = streams[0] ?? null;
  const width = firstStream?.width ?? 1;
  const height = firstStream?.height ?? 1;
  const ratio = height / width;
  return ratio;
};


getVideoRatio()
  .then(ratio => {
    console.log(ratio);
  })
  .catch(err => {
    console.log(util.inspect(err, false, null, true));
  })

