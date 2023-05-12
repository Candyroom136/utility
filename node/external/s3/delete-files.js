//참고: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObjects-property
const aws = require('aws-sdk');
const util = require('util');
const { DELETE_FILES } = require('./constant')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const deleteFiles = async function () {
  const params = {
    Bucket: DELETE_FILES.BUCKET_NAME,
    Delete: {
      Objects: DELETE_FILES.OBJECTS
    }
  };

  return s3.deleteObjects(params)
    .promise()
};

deleteFiles()
.then(res => console.log(util.inspect(res, false, null, true)))
.catch(err => console.log(util.inspect(err, false, null, true)));