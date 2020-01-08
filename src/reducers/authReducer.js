const initialState = {
  login: false,
  isFetchning: false,
  users: [],
  posts: [],
  comments: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isFetchning: true
      };
    case "FETCHED_USER":
      return {
        ...state,
        isFetchning: false,
        users: action.data,
        posts: [],
        comments: []
      };
    case "FETCH_POST":
      return {
        ...state,
        isFetchning: true
      };
    case "FETCHED_POST":
      return {
        ...state,
        posts: action.data
      };
    case "FETCH_COMMENTS":
      return {
        ...state,
        isFetchning: true
      };
    case "FETCHED_COMMENTS":
      return {
        ...state,
        isFetchning: false,
        comments: action.data
      };
    default:
      return state;
  }
};

export default authReducer;
