const moment = require('moment-timezone');
const { TIMEZONE } = require('../date');

const getCurrentDateMock = (date) => moment(date).tz(TIMEZONE);

module.exports = { getCurrentDateMock };
