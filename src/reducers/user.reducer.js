import { ADD_USER_LIKE, GET_USER } from "../actions/user.action";

const initalState = {};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case ADD_USER_LIKE:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            likes: action.payload.likes,
          };
        } else return user;
      });
    default:
      return state;
  }
}
