import { USER_ACTION_TYPES } from "./user.type";

const INTIAL_STATE = {
  users: [],
  searchValue: "",
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case USER_ACTION_TYPES.SEARCH_USERNAME:
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
