const moment = require('moment');

const getCurrentUtcDateTime = () => moment.utc().format();

module.exports = {
  getCurrentUtcDateTime,
};
