import { combineReducers } from 'redux';
import posts from './PostReducer';
import ui from './UiReducer';
import user from './UserReducer';
import auth from './AuthReducer';

const rootReducer = combineReducers({
  posts, ui, user, auth,
});

export default rootReducer;
