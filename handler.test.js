const { test, expect } = require('@jest/globals');
const moment = require('moment-timezone');
const { getMessage } = require('./handler');

// Moment dates are in yyyy-mm-dd
// An
test('Return cleaning message for An on 2021-03-12', () => {
  const currentDate = moment('2021-03-12').tz('Asia/Singapore');
  const sundayDate = moment('2021-03-12').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for An on 2021-04-09', () => {
  const currentDate = moment('2021-04-09').tz('Asia/Singapore');
  const sundayDate = moment('2021-04-09').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for An on 2021-05-07', () => {
  const currentDate = moment('2021-05-07').tz('Asia/Singapore');
  const sundayDate = moment('2021-05-07').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for An on 2021-06-04', () => {
  const currentDate = moment('2021-06-04').tz('Asia/Singapore');
  const sundayDate = moment('2021-06-04').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for An on ', () => {
  const currentDate = moment('2021-07-02').tz('Asia/Singapore');
  const sundayDate = moment('2021-07-02').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @AnFromVietnam, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

// Nhim
test('Return cleaning message for Nhim on ', () => {
  const currentDate = moment('2021-03-26').tz('Asia/Singapore');
  const sundayDate = moment('2021-03-26').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for Nhim on 2021-04-23', () => {
  const currentDate = moment('2021-04-23').tz('Asia/Singapore');
  const sundayDate = moment('2021-04-23').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for Nhim on 2021-05-21', () => {
  const currentDate = moment('2021-05-21').tz('Asia/Singapore');
  const sundayDate = moment('2021-05-21').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for Nhim on 2021-06-18', () => {
  const currentDate = moment('2021-06-18').tz('Asia/Singapore');
  const sundayDate = moment('2021-06-18').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});

test('Return cleaning message for Nhim on 2021-07-16', () => {
  const currentDate = moment('2021-07-16').tz('Asia/Singapore');
  const sundayDate = moment('2021-07-16').tz('Asia/Singapore').add(2, 'd');

  expect(getMessage(currentDate, sundayDate)).toBe(
    `Hi @ashleyteehee, today is ${currentDate.format(
      'MMMM Do YYYY'
    )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${sundayDate.format(
      'MMMM Do YYYY'
    )}`
  );
});
