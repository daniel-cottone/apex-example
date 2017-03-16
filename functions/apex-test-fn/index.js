'use strict';
console.log('beginning execution');

const _ = require('lodash');

exports.handle = (event, context, callback) => {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);

  _.each(event, (prop, key) => {
    console.log('prop: %j', prop);
    console.log('key: %j', key);
  });

  callback(null, { carrier: process.env.CARRIER });
};
