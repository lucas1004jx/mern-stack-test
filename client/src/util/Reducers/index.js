import { combineReducers } from 'redux';
import posts from './PostReducer';
import user from './UserReducer';

const rootReducer = combineReducers({ posts, user });

export default rootReducer;
