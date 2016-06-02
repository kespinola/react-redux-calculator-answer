import { describe, it } from 'mocha';
import { expect } from 'chai';
import store, {
  reducer,
  incrementValue,
  changeOperator,
  incrementChange,
} from './../src/store';

describe('Calculator State Management', () => {
  it('sets initial state to empty object', () => {
    expect(store.getState()).is.eql({});
  });
  describe('INCREMENT_FIELD', () => {
    it('sets value to empty string on empty increment value', () => {
      const nextState = reducer({}, incrementValue());
      expect(nextState).to.eql({ value: '' });
    });
    it('increments to 3 when current is empty', () => {
      const nextState = reducer({}, incrementValue('3'));
      expect(nextState).to.eql({ value: '3' });
    });
    it('increments to 34 when current is 3', () => {
      const nextState = reducer({ value: '3' }, incrementValue('4'));
      expect(nextState).to.eql({ value: '34' });
    });
    it('increments to 34. when current is 34', () => {
      const nextState = reducer({ value: '34' }, incrementValue('.'));
      expect(nextState).to.eql({ value: '34.' });
    });
    it('increments to 34.1 when current is 34.', () => {
      const nextState = reducer({ value: '34.' }, incrementValue('1'));
      expect(nextState).to.eql({ value: '34.1' });
    });
  });
  describe('CHANGE_OPERATOR', () => {
    it('updates to operator +', () => {
      const nextState = reducer({}, changeOperator('+'));
      expect(nextState).to.eql({ operator: '+' });
    });
    it('overrides previous operator with *', () => {
      const nextState = reducer({ operator: '+' }, changeOperator('-'));
      expect(nextState).to.eql({ operator: '-' });
    });
  });
  describe('INCREMENT_CHANGE', () => {
    const initState = { change: '4', value: '22' };
    const nextState = reducer(initState, incrementChange('7'));
    const expectedState = { ...initState, change: '47' };
    it('increments to 4 when current is 47', () => {
      expect(nextState).to.eql(expectedState);
    });
    it('does not effect value when changed', () => {
      expect(nextState).to.eql(expectedState);
    });
  });
});
