import MainLayot from '../Components/MainLayout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { MyPost, PostPageProps, MyUsers } from '../interfaces/interfaces';
import { NextPageContext } from 'next';

import { useSelector, useDispatch } from 'react-redux';
import {
  startFetchUsers,
  startFetchAllPosts,
} from '../Components/redux/action';

export default function Posts() {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const searchPosts = useSelector((state) => state.searchPosts);

  const [postState, setPostState] = useState(posts);

  useEffect(() => {
    dispatch(startFetchUsers());
  }, []);

  useEffect(() => {
    dispatch(startFetchAllPosts());
  }, []);

  if (!postState) {
    return (
      <MainLayot>
        <p>Loading...</p>
      </MainLayot>
    );
  }
  useEffect(() => {
    setPostState((state) =>
      searchPosts.length > 0 ? (state = searchPosts) : (state = posts)
    );
  }, [posts, searchPosts]);
  return (
    <MainLayot title={'Posts All PAge'}>
      <h1> Posts Page </h1>
      {searchPosts.length > 0 &&  <span> Найдено:{searchPosts.length}</span> }

      {users.length > 0 &&
        postState.map((element) => (
          <>
            <div key={element.id} style={{ padding: '1px' }}>
              <h4>
                Name: {users.find((item) => item.id === element.userId).name}{' '}
                <p>
                  Username:
                  {users.find((item) => item.id === element.userId).username}
                </p>
              </h4>
              Post-Title:
              <Link href={`post/[postid]`} as={`post/${element.id}`}>
                <a>{element.title}</a>
              </Link>
            </div>
            <hr style={{ marginTop: '5px' }} />
          </>
        ))}
    </MainLayot>
  );
}

// Posts.getInitialProps = async ({ req }: NextPageContext) => {
//   if (!req) {
//     return { posts: null };
//   }
//   const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts: MyPost[] = await responce.json();
//   return { posts };
// };
