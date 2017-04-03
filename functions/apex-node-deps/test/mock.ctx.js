'use strict';
import sinon from 'sinon';

module.exports = function () {
  let _this = this;
  this.succeed = sinon.stub();
  this.fail = sinon.stub();
  this.reset = () => {
    _this.succeed.reset();
    _this.fail.reset();
  };
};
