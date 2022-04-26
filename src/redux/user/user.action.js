import { USER_ACTION_TYPES } from "./user.type";

export const getUsers = (monsters) => {
  return {
    type: USER_ACTION_TYPES.GET_USERS,
    payload: monsters,
  };
};

export const searchUser = (username) => ({
  type: USER_ACTION_TYPES.SEARCH_USERNAME,
  payload: username,
});
