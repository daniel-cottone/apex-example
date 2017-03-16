console.log('beginning execution');

var aws = require('aws-sdk');
var kms = new aws.KMS({ region: process.env.AWS_REGION });

exports.handle = (event, context, callback) => {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);

  var decryptProps = (obj) => {
    return Promise.all(Object.keys(obj).map(e => {
      var params = {
        'CiphertextBlob': new Buffer(event[e], 'base64')
      };
      console.log('params: %j', params);
      return kms.decrypt(params).promise();
    }));
  };

  decryptProps(event).then(values => {
    console.log('values: %j', values);
    var response = values.reduce((result, item, i) => {
      console.log('item: %j', item.Plaintext.toString());
      var key = Object.keys(event)[i];
      result[key] = item.Plaintext.toString();
      return result;
    }, {});
    callback(null, response);
  }).catch(error => {
    console.log('error: %j', error);
    callback(error, null);
  });

};
