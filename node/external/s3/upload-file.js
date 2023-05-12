const aws = require('aws-sdk');
const fs = require('fs');
const util = require('util')
const { UPLOAD_FILE } = require('./constant')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadFile = async function (data) {
  const params = {
    Bucket: UPLOAD_FILE.BUCKET_NAME,
    Key: UPLOAD_FILE.KEY,
    ACL: UPLOAD_FILE.ACL,
    Body: data,
  };

  return s3
    .putObject(params)
    .promise()
    .then(res => {
      console.log(util.inspect(res, false, null, true));
    })
    .catch(err => {
      console.log(util.inspect(err, false, null, true));
    });
};

fs.readFile(`${__dirname}/example.jpeg`, (err ,data) => {
  if (err) {
    console.log(util.inspect(err, false, null, true))
  } else {
    uploadFile(data)
  }
})




