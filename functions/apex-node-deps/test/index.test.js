'use strict';
import func from '../src';
import expect from 'chai';
import MockContext from 'mock-lambda-context';

describe('apex-node-deps', () => {
  it('should return "Hello World"', () => {
    let e = {};
    let ctx = new MockContext();
    func(e, ctx, (err, response) => {
      expect(response).to.equal('Hello World');
    });
  });
});
