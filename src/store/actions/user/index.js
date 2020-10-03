import * as types from '../../constants';

const actionSetUser = (user) => ({
  type: types.USER.ACTION_SET_USER,
  payload: user,
});

const action = {
  actionSetUser,
};

export const user = {
  action,
};

export default user;
