import { combineReducers } from 'redux';
import posts from './PostReducer';
import ui from './UserReducer';
import user from './UiReducer';

const rootReducer = combineReducers({ posts, ui, user });

export default rootReducer;
