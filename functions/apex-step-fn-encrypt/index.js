console.log('beginning execution');

var aws = require('aws-sdk');
var kms = new aws.KMS({ region: process.env.AWS_REGION });

exports.handle = function (event, context, callback) {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);

  var encryptProps = function (obj) {
    return Promise.all(Object.keys(obj).map(e => {
      var params = {
        'KeyId': process.env.KMS_KEY_ID,
        'Plaintext': event[e]
      };
      console.log('params: %j', params);
      return kms.encrypt(params).promise();
    }));
  };

  encryptProps(event).then(values => {
    console.log('values: %j', values);
    var response = values.reduce((result, item, i) => {
      console.log('item: %j', item.CiphertextBlob.toString('base64'));
      var key = Object.keys(event)[i];
      result[key] = item.CiphertextBlob.toString('base64');
      return result;
    }, {});
    callback(null, response);
  }).catch(error => {
    console.log('error: %j', error);
    callback(error, null);
  });

};
