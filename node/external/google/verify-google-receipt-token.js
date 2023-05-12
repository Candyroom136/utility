const { JWT } = require('google-auth-library');
require('dotenv').config()
const { VERIFY_GOOGLE_RECEIPT_TOKEN } = require('./constant')

const { PACKAGE_NAME, PRODUCT_ID, GOOGLE_TOKEN} = VERIFY_GOOGLE_RECEIPT_TOKEN

const validateOrderToken = async function ({ googleToken, productId }) {
  const googleOrderValidationURI = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${PACKAGE_NAME}/purchases/products/${PRODUCT_ID}/tokens/${GOOGLE_TOKEN}`;
  const client = new JWT({
    email: process.env.GOOGLE_PURCHASE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PURCHASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  });

  try {
    const res = await client.request({ url: googleOrderValidationURI });
    if (res.data.purchaseState) {
      throw new Error('결제되지 않은 주문입니다.');
    }

    return res.data;
  } catch (error) {
    if (error.response) {
      error.status = 500;
      error.message = error.response.data.error.message;
    } else {
      error.status = 400;
      error.message = '결제되지 않은 주문입니다.';
    }
    throw error;
  }
};

validateOrderToken()
