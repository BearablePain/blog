import { put, takeLatest, all, call } from 'redux-saga/effects';
import { START_FETCH_POST, START_FETCH_USERS, START_FETCH_ALL_POSTS } from './actionTypes';
import {
  getPostFromFetch,
  load,
  loadUsers,
  getUsersFromFetch,
  loadAllPosts,
  getAllPostsFromFetch,
} from './action';

function* fetchPost(action) {
  const data = yield call(load, action.id);
  yield put(getPostFromFetch(data));
}

function* fetchUsers() {
  const data = yield call(loadUsers);
  yield put(getUsersFromFetch(data));
}

function* fetchAllPosts() {
  const data = yield call(loadAllPosts);
  yield put(getAllPostsFromFetch(data));
}

function* actionWatcher() {
  yield takeLatest(START_FETCH_POST, fetchPost);
  yield takeLatest(START_FETCH_USERS, fetchUsers);
  yield takeLatest(START_FETCH_ALL_POSTS, fetchAllPosts);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
