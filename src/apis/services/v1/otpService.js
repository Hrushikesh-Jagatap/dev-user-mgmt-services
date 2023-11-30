const { env, systemToken } = require('@config');

const {
  Logger: log,
  ErrorHandler: { VERIFY_OTP_ERROR },
  apiServices: { otp: otpAPIService },
} = require('intelli-utility');
const { sendOtpMessage } = require('@root/src/apis/producers/otpProducer');
const { EVENT_TYPES } = require('@constants');
const { MEDIUM, ENV } = require('@common/utility/constants');
const sendotps = require('@root/src/apis/services/otp');
const processToSendOtp = async ({ args, medium }) => {
  log.info({info: 'OTP Service :: Inside Process To Send Otp'})
  
  const { phone, userId } = args;


 const a=sendotps.sendOtp(phone);
// if(a=="OTP sent successfully!")
  return true;

  // if (
  //   (env === ENV.PRD && phone === ENV.PROD_DUMMY_PHONE_NUM) ||
  //   phone.startsWith('420') ||
  //   env === ENV.DEV ||
  //   [].includes(phone)
  // ) {
  //   log.info({info: 'Working in Dev/Staging/Local enviroment'})
  //   return true;
  // }
  // const request = {
  //   phone,
  //   userId,
  // };

  // const eventType = medium === MEDIUM.CALL ? EVENT_TYPES.SENT_OTP_OVER_CALL : EVENT_TYPES.SENT_OTP_OVER_SMS;
  // return sendOtpMessage(request, eventType);
};

const verifyOTP = async ({ phone, otp, userId }) => {




const abc= sendotps.verifyOtp(phone,otp);
console.log("===========",abc);
if(abc == 'OTP verification successful!')
{
  return true
}
else{
  throw new VERIFY_OTP_ERROR('unable to verify');
}

  // log.info({info : `OTP Service :: Verify Otp`})
  // if (env === ENV.DEV) {
  //   if (otp === '7777') {
  //     log.info({info: 'Working in Dev/Staging/Local Enviroment'})
  //     return true
  //   }
  //   throw new VERIFY_OTP_ERROR('unable to verify');
  // }

  // if ((env === ENV.PRD && phone === ENV.PROD_DUMMY_PHONE_NUM) || phone.startsWith('420') || [].includes(phone)) {
  //   if (otp === ENV.PROD_DUMMY_OTP) {
  //     log.info({info: 'Working inside Dummy Prod Enviroment'})
  //     return true;
  //   }
  //   throw new VERIFY_OTP_ERROR('unable to verify');
  // }

  // const body = JSON.stringify({
  //   phone,
  //   otp,
  //   userId,
  // });
  // const headers = {
  //   Authorization: `systemToken ${systemToken}`,
  //   'Content-Type': 'application/json',
  // };
  // log.info({info: 'OTP Service :: Verify Otp, calling otp API service'})
  // return otpAPIService.verifyOTP({ headers, body });
};

module.exports = {
  processToSendOtp,
  verifyOTP,
};
