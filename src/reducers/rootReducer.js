import authReducer from "./authReducer";
//import postReducer from "./postReducer";
//import commentReducer  from "./commentReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  //post: postReducer,
  //commentReducer: commentReducer
});

export default rootReducer;