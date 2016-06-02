import { describe, it } from 'mocha';
import { expect } from 'chai';
import store, {
  reducer,
  incrementValue,
  changeOperator,
  incrementChange,
  calculateEquation,
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

  describe('CALCULATE_EQUATION', () => {
    it('handles adding whole numbers', () => {
      const initState = { change: '4', value: '22', operator: '+' };
      const nextState = reducer(initState, calculateEquation());
      expect(nextState).to.eql({ change: null, value: '26', operator: null });
    });
    it('handles adding decimal values', () => {
      const initState = { change: '4.1', value: '22', operator: '+' };
      const nextState = reducer(initState, calculateEquation());
      expect(nextState).to.eql({ change: null, value: '26.1', operator: null });
    });
    it('handles multiplying values', () => {
      const initState = { change: '4', value: '5', operator: '*' };
      const nextState = reducer(initState, calculateEquation());
      expect(nextState).to.eql({ change: null, value: '20', operator: null });
    });
    it('sets value to result and clears keys { clear, operator }', () => {
      const initState = { change: '1', value: '3', operator: '+' };
      const nextState = reducer(initState, calculateEquation());
      expect(nextState).to.eql({ change: null, value: '4', operator: null });
    });
  });
});
