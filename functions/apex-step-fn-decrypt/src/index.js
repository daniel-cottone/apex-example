'use strict';
console.log('beginning execution');

const aws = require('aws-sdk');
const kms = new aws.KMS({ region: process.env.AWS_REGION });

exports.handle = (event, context, callback) => {
  console.log('processing event: %j', event);
  console.log('processing context: %j', context);

  const decryptProps = (obj) => {
    return Promise.all(Object.keys(obj).map(e => {
      let params = {
        'CiphertextBlob': new Buffer(event[e], 'base64')
      };
      console.log('params: %j', params);
      return kms.decrypt(params).promise();
    }));
  };

  decryptProps(event).then(values => {
    console.log('values: %j', values);
    let response = values.reduce((result, item, i) => {
      console.log('item: %j', item.Plaintext.toString());
      let key = Object.keys(event)[i];
      result[key] = item.Plaintext.toString();
      return result;
    }, {});
    callback(null, response);
  }).catch(error => {
    console.log('error: %j', error);
    callback(error, null);
  });

};
