const { JWT } = require('google-auth-library');
require('dotenv').config()

const SAIT_CHARGE_PACKAGE_NAME = ''

const validateOrderToken = async function ({ googleToken, productId }) {
  const googleOrderValidationURI = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${SAIT_CHARGE_PACKAGE_NAME}/purchases/products/${productId}/tokens/${googleToken}`;
  const client = new JWT({
    email: process.env.OPENTOWN_GOOGLE_PURCHASE_CLIENT_EMAIL,
    key: process.env.OPENTOWN_GOOGLE_PURCHASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  });

  try {
    const res = await client.request({ url: googleOrderValidationURI });
    console.log(res.data)
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


const receipeToken = ''
//google 영수증token의 상태 확인
validateOrderToken({ productId: '', googleToken: freeToken})
