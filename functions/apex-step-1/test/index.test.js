'use strict';
import {handle} from '../src';
import assert from 'assert';
import expected from './expected.json';

describe('apex-step-1', () => {
  it('should return "Step 1 got called!"', () => {
    const event = {};
    const context = {};
    handle(event, context, (err, response) => {
      assert.deepEqual(response, expected);
    });
  });
});
