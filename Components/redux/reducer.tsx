const {  GET_DATA_FROM_FETCH, GET_USERS_FROM_FETCH, GET_ALL_POSTS_FROM_FETCH, SEARCH_POSTS } = require("./actionTypes")
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA_FROM_FETCH: 
    return {
      ...state,
      post: action.payload
      }
      case GET_USERS_FROM_FETCH: 
      return {
        ...state,
        users: action.payload
      }
    case GET_ALL_POSTS_FROM_FETCH:
      return {
        ...state,
        posts: action.payload
      }
    
    case SEARCH_POSTS: {
      return {
        ...state,
        searchPosts: action.payload
      }
    }

    default:
      return state;
  }
}

