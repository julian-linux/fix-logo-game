import * as types from '../../constants';

const initialState = {
  name: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER.ACTION_SET_USER:
      return { ...state, name: payload };
    default:
      return state;
  }
};

export default userReducer;
