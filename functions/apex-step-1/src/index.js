'use strict';
import winston from 'winston';

exports.handle = (event, context, callback) => {
  winston.log('debug', `processing event: ${event}`);
  winston.log('debug', `processing context: ${context}`);
  event.stepOne = 'Step 1 got called!';
  callback(null, event);
};
