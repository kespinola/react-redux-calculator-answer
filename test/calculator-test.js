import { describe, it } from 'mocha';
import { expect } from 'chai';
import store from './../src/store';

describe('Calculator State Management', () => {
  it('sets initial state to empty object', () => {
    expect(store.getState()).is.eql({});
  });
});
