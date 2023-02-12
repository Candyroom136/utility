const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');

const getVideoRatio = async function ( videoURL ) {
  const fileMetaData = await ffprobe(videoURL, { path: ffprobeStatic.path });
  console.log(fileMetaData)
  const streams = fileMetaData?.streams;
  const firstStream = streams[0] ?? null;
  const width = firstStream?.width ?? 1;
  const height = firstStream?.height ?? 1;
  const ratio = height / width;
  return ratio;
};


getVideoRatio("videoUrl주소")
.then(ratio => {
  console.log(ratio)
})
.catch(error => {
  console.log(error)
})

