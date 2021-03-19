import callApi from 'util/apiCaller';

import { FETCHING_START, FETCHING_END } from './UiActions';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export const addPostRequest = (post) => async (dispatch) => {
  dispatch({ type: FETCHING_START });
  try {
    const res = await callApi('api/posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
        media: post.media,
      },
    });

    dispatch(addPost(res.post));
    dispatch({ type: FETCHING_END });
  } catch (error) {
    dispatch({ type: FETCHING_END });
  }
};

export function addPosts(posts) {
  console.log('addPosts', addPosts);
  return {
    type: ADD_POSTS,
    posts,
  };
}

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_START });
    const res = await callApi('api/posts');
    dispatch(addPosts(res.posts));
    dispatch({ type: FETCHING_END });
  } catch (error) {
    dispatch({ type: FETCHING_END });
  }
};

export const fetchPost = (cuid) => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_START });
    const res = await callApi(`api/posts/${cuid}`);
    dispatch(addPost(res.post));
    dispatch({ type: FETCHING_END });
  } catch (error) {
    dispatch({ type: FETCHING_END });
  }
};

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export const deletePostRequest = (cuid) => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_START });
    console.log('deletePostRequest cuid---', cuid);
    await callApi(`api/posts/${cuid}`, 'delete');
    dispatch(deletePost(cuid));
    dispatch({ type: FETCHING_END });
  } catch (error) {
    dispatch({ type: FETCHING_END });
  }
};
