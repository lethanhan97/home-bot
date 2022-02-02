'use strict';
const axios = require('axios');
const date = require('./date');
const env = require('./env.json');

const api = axios.create({
  baseURL: `https://api.telegram.org/bot${env.token}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const getUser = () => {
  const currentDate = date.getCurrentDate();
  const startWeek = date.getStartWeek();

  const differenceInWeek = currentDate.diff(startWeek, 'w');
  const userIndex = differenceInWeek % 2;

  const users = ['@ashleyteehee', '@AnFromVietnam'];

  return users[userIndex];
};

const getMessage = () => {
  const currentDate = date.getCurrentDate();
  const twoDaysLaterDate = date.getCurrentDate().add(2, 'd');
  const user = getUser();

  if (!user) {
    return `Hi, today is ${currentDate.format(
      'MMMM Do YYYY'
    )}. The time is ${currentDate.format('hh:mm:ss')}. Have a nice day!`;
  }

  const message = `Hi ${user}, today is ${currentDate.format(
    'MMMM Do YYYY'
  )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${twoDaysLaterDate.format(
    'MMMM Do YYYY'
  )}`;

  return message;
};

const remind = async () => {
  const { chatId } = env;

  const message = getMessage();

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

module.exports = {
  getUser,
  getMessage,
  remind,
};
