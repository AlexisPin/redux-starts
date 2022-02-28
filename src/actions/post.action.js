import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return async (dispatch) => {
    return axios
      .get("http://localhost:3000/posts?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
export const addPost = (data) => {
  return async (dispatch) => {
    return axios
      .post("http://localhost:3000/posts?_sort=id&_order=desc", data)
      .then((res) => {
        dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const editPost = (data) => {
  return async (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, { ...data })
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: { ...res.data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    return axios
      .delete(`http://localhost:3000/posts/${postId}`)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};
export const addLike = (data) => {
  return async (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, { ...data })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...res.data } });
      })
      .catch((err) => console.log(err));
  };
};
