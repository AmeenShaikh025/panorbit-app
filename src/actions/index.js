import store from "../store";

//actions
const FETCH_USER = "FETCH_USER";
const FETCHED_USER = "FETCHED_USER";
const FETCH_POST = "FETCH_POST";
const FETCHED_POST = "FETCHED_POST";
const FETCH_COMMENTS = "FETCH_COMMENTS";
const FETCHED_COMMENTS = "FETCHED_COMMENTS";
//action creators (function)

export const fetch_user = () => {
  return {
    type: FETCH_USER
  };
};

export const fetched_user = users => {
  return {
    type: FETCHED_USER,
    data: users
  };
};

export const fetch_post = () => {
  return {
    type: FETCH_POST
  };
};

export const fetched_post = posts => {
  return {
    type: FETCHED_POST,
    data: posts
  };
};

export const fetch_comments = () => {
  return {
    type: FETCH_COMMENTS
  };
};

export const fetched_comments = comments => {
  return {
    type: FETCHED_COMMENTS,
    data: comments
  };
};

//Async call (redux thunk)

//get all user
export const allUser = () => {
  store.dispatch(fetch_user());
  return dispatch => {
    fetch("https://panorbit.in/api/users.json")
      .then(res => res.json())
      .then(res => dispatch(fetched_user(res.users)))
      .catch(error => console.error(error));
  };
};

//get all posts
export const allPosts = () => {
  store.dispatch(fetch_post());
  return dispatch => {
    fetch("https://panorbit.in/api/posts.json")
      .then(res => res.json())
      .then(res => dispatch(fetched_post(res.posts)))
      .catch(error => console.error(error));
  };
};

//get all posts
export const allComments = () => {
  store.dispatch(fetch_comments());
  return dispatch => {
    fetch("https://panorbit.in/api/comments.json")
      .then(res => res.json())
      .then(res => dispatch(fetched_comments(res.comments)))
      .catch(error => console.error(error));
  };
};
