import {
  FETCHING_START,
  FETCHING_END,
} from '../Actions/UiActions';

// Initial State
const initialState = {};

const UiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_START:
      return { ...state, loading: true };
    case FETCHING_END:
      return { ...state, loading: false };

    default:
      return state;
  }
};

// Export Reducer
export default UiReducer;
