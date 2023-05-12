//참고: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObjects-property
const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const getFiles = async function (bucketName) {
  const params = {
    Bucket: bucketName,
    MaxKeys: 1000
  };

  return s3.listObjects(params)
    .promise()
};

getFiles('3d-commerce-files.mindlogic.ai-dev')
.then(res => {
  for(let i = 0 ; i < res.Contents.length; i++) {
    if (res.Contents[i].Size !== 0) {
      console.log('https://s3.ap-northeast-2.amazonaws.com/3d-commerce-files.mindlogic.ai-dev/' + res.Contents[i].Key)
    }
  } 
  
})