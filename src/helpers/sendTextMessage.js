import request from 'request';
import credentials from '../config.json';

export default function sendTextMessage(senderId, text) {
  request({
    url: credentials.facebook.url,
    qs: {access_token: credentials.facebook.pageAccessToken},
    method: "POST",
    json: {
      recipient: {id: senderId},
      message: {text},
    }
  });
}