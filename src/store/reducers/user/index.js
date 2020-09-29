import * as types from '../../constants';

const initialState = {
  name: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER.ACTION_INITIAL_STATE:
      return { ...initialState };
    case types.USER.ACTION_SET_USER:
      return { ...payload };
    default:
      return state;
  }
};

export default userReducer;
