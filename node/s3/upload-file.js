const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const uploadFile = async function ({ data, bucketName, key }) {
  const params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: data,
  };

  return s3
    .putObject(params)
    .promise()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};

uploadFile(data, bucketName, key )




