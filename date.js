const moment = require('moment-timezone');

const TIMEZONE = 'Asia/Singapore';
const START_WEEK = '2021-10-01';

const getStartWeek = () => moment(START_WEEK).tz('Asia/Singapore');
const getCurrentDate = () => moment().tz(TIMEZONE);

module.exports = { getCurrentDate, getStartWeek };
