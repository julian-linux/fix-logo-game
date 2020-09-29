import * as types from '../../constants';

const actionSetInitialState = () => ({
  type: types.USER.ACTION_INITIAL_STATE,
});

const actionSetUser = (user) => ({
  type: types.USER.ACTION_INITIAL_STATE,
  payload: user,
});

const action = {
  actionSetInitialState,
  actionSetUser,
};

const user = {
  action,
};

export default user;
