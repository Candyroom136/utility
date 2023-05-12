const { GENERATE_BASE_64_TOKEN } = require('./constant')

const plainCredintial =`${GENERATE_BASE_64_TOKEN.USERNAME}:${GENERATE_BASE_64_TOKEN.PASSWORD}`;
const encodedCredential = Buffer.from(plainCredintial).toString('base64');
console.log(encodedCredential);
