'use strict';
const axios = require('axios');
const moment = require('moment-timezone');
const env = require('./env.json');

const api = axios.create({
  baseURL: `https://api.telegram.org/bot${env.token}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const getUser = () => {
  const users = ['@AnFromVietnam', '@ashleyteehee'];

  return users[0];
};

const getMessage = () => {
  const user = getUser();
  const currentDate = moment().tz('Asia/Singapore');
  const sundayDate = currentDate.add(2, 'd');

  const message = `Hi ${user}, today is ${currentDate.format(
    'MMMM Do YYYY'
  )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
    'MMMM Do YYYY'
  )}`;

  return message;
};

module.exports.remind = async (event) => {
  const { chatId } = env;

  const message = getMessage(currentDate);
  return api
    .get('/sendMessage', {
      params: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html',
      },
    })
    .then(() => ({
      statusCode: 200,
      body: JSON.stringify({
        message: `${message}`,
      }),
    }))
    .catch((e) => ({
      statusCode: 500,
      body: JSON.stringify(e),
    }));

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
