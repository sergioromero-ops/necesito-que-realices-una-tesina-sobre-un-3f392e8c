import test from 'node:test';
import assert from 'node:assert/strict';
import { describeRequest } from '../src/index.js';

test('stores the original request', () => {
  assert.equal(typeof describeRequest(), 'string');
  assert.ok(describeRequest().length > 0);
});
