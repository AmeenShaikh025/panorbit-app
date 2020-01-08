const initialState = {
  login: false,
  isFetchning: false,
  users: [],
  posts: [],
  comments: [],
  currentUserId: null
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
        posts: []
      };
    case "FETCH_POST":
      return {
        ...state,
        isFetchning: true
      };
    case "FETCHED_POST":
      return {
        ...state,
        posts: action.data,
        users: []
      };
    default:
      return state;
  }
};

export default authReducer;
