console.log('beginning execution');

exports.handle = function (event, context, callback) {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);
  callback(null, event);
};
