import {
  GET_DATA_FROM_FETCH,
  START_FETCH_POST,
  GET_USERS_FROM_FETCH,
  START_FETCH_USERS,
  START_FETCH_ALL_POSTS,
  GET_ALL_POSTS_FROM_FETCH,
  SEARCH_POSTS,
} from './actionTypes';

export const load = async (id) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const result = await responce.json();
  return result;
};

export const loadUsers = async () => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const result = await responce.json();
  return result;
};

export const loadAllPosts = async () => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await responce.json();
  return result;
};

export const startFetchPosts = (id) => {
  return { type: START_FETCH_POST, id };
};

export const startFetchUsers = () => {
  return { type: START_FETCH_USERS };
};

export const startFetchAllPosts = () => {
  return { type: START_FETCH_ALL_POSTS };
};

export const getPostFromFetch = (payload) => {
  return {
    type: GET_DATA_FROM_FETCH,
    payload,
  };
};

export const getUsersFromFetch = (payload) => {
  return {
    type: GET_USERS_FROM_FETCH,
    payload,
  };
};

export const getAllPostsFromFetch = (payload) => {
  return {
    type: GET_ALL_POSTS_FROM_FETCH,
    payload,
  };
};

export const searchPosts = (posts, searchWord) => {
  const serachPosts = [
    ...posts.filter((el) =>
      el.title.toLowerCase().split(' ').includes(searchWord.toLowerCase())
    ),
    ...posts.filter((el) =>
      el.body.toLowerCase().split(' ').includes(searchWord.toLowerCase())
    ),
  ];


  return {
    type: SEARCH_POSTS,
    payload: serachPosts,
  };
};
