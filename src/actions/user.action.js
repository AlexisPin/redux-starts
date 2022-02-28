import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  return async (dispatch) => {
    return axios
      .get("http://localhost:3000/users")
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addUserLike = (data) => {
  return async (dispatch) => {
    return axios
      .put(`http://localhost:3000/users/${data.id}`, { ...data })
      .then((res) => {
        dispatch({ type: ADD_USER_LIKE, payload: { ...res.data } });
      })
      .catch((err) => console.log(err));
  };
};
