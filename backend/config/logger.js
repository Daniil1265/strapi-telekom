'use strict';

const {
  winston,
  formats: { prettyPrint },
} = require('@strapi/logger');

module.exports = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        prettyPrint({ timestamps: 'YYYY-MM-DD hh:mm:ss' })
      ),
    }),
    new winston.transports.File({
        filename: 'config/logs/access.log'
    })
  ],
};