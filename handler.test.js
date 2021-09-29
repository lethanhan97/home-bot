const { test, expect } = require('@jest/globals');
const moment = require('moment-timezone');
const { getMessage } = require('./handler');

// Moment dates are in yyyy-mm-dd
// An
test('Return cleaning message for An on 2021-10-08', () => {
  const currentDate = moment('2021-10-08').tz('Asia/Singapore');
  const sundayDate = moment('2021-10-10').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for An on 2021-10-22', () => {
  const currentDate = moment('2021-10-22').tz('Asia/Singapore');
  const sundayDate = moment('2021-10-24').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

// Nhim
test('Return cleaning message for Nhim on 2021-10-01', () => {
  const currentDate = moment('2021-10-01').tz('Asia/Singapore');
  const sundayDate = moment('2021-10-03').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for Nhim on 2021-10-15', () => {
  const currentDate = moment('2021-10-15').tz('Asia/Singapore');
  const sundayDate = moment('2021-10-17').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});
