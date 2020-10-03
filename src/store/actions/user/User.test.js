import * as types from '../../constants';
import { user } from './index';

test('User action', () => {
  const expectedAction = {
    type: types.USER.ACTION_SET_USER,
  };
  expect(user.action.actionSetUser()).toEqual(expectedAction);
});
