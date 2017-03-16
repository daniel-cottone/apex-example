'use strict';
console.log('beginning execution');

exports.handle = (event, context, callback) => {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);
  event.stepTwo = 'Step 2 got called!';
  callback(null, event);
};
