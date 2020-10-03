import userReducer from './index';
import * as types from '../../constants';

describe('userReducer', () => {
  const initialState = {
    name: '',
  };
  it('it should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('it should update the user name', () => {
    const payload = 'user name';
    const action = {
      type: types.USER.ACTION_SET_USER,
      payload,
    };
    expect(userReducer(initialState, action)).toEqual({ name: payload });
  });
});
