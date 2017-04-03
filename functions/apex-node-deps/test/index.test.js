'use strict';
import func from '../src';
import expect from 'chai';
import context from './mock.ctx.js';

describe('apex-node-deps', () => {
  it('should return "Hello World"', () => {
    let e = {};
    let ctx = new context();
    func(e, ctx, (err, response) => {
      expect(response).to.equal('Hello World');
    });
  });
});
