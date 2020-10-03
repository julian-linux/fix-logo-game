import {
  getItemInArray,
  getDragIndexOfArray,
  shuffle,
  checkCorrectPositionById,
  checkCorrectPatternById,
} from './index';
import { pattern, item, expectedItem, incorrectPattern } from './__mocks__';

describe('getItemInArray', () => {
  it('it should return the correct item', () => {
    expect(getItemInArray(pattern, item)('id')).toEqual(expectedItem);
  });

  it('it should return undefined when there is no match', () => {
    expect(getItemInArray(pattern, {})('id')).toEqual(undefined);
  });
});

describe('getDragIndexOfArray', () => {
  it('it should return the correct index', () => {
    expect(getDragIndexOfArray(pattern, item)).toEqual(0);
  });

  it('it should return -1 when there is no match', () => {
    expect(getDragIndexOfArray(pattern, {})).toEqual(-1);
  });
});

test('shuffle should return an array of the same length', () => {
  expect(shuffle(pattern).length).toEqual(pattern.length);
});

describe('checkCorrectPositionById', () => {
  it('should return true if the position is correct', () => {
    expect(checkCorrectPositionById(item, 0, pattern)).toEqual(true);
  });

  it('should return false if the position is incorrect', () => {
    expect(checkCorrectPositionById(item, 3, pattern)).toEqual(false);
  });
});

describe('checkCorrectPatternById', () => {
  it('should return true if the patters match', () => {
    expect(checkCorrectPatternById(pattern, pattern)).toEqual(true);
  });

  it('should return false if the patters do not match', () => {
    expect(checkCorrectPatternById(incorrectPattern, pattern)).toEqual(false);
  });
});
