import { combineReducers } from 'redux';
import posts from './PostReducer';
import ui from './UiReducer';
import user from './UserReducer';

const rootReducer = combineReducers({ posts, ui, user });

export default rootReducer;
