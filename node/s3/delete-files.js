//참고: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObjects-property
const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const deleteFiles = async function (bucketName, objects) {
  const params = {
    Bucket: bucketName,
    Delete: {
      Objects: objects
    }
  };

  return s3.deleteObjects(params)
    .promise()
};

deleteFiles('', [{ Key: 'a.jpeg '}])
.then(res => console.log(res))