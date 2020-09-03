import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useRouter } from 'next/router';
import MainLayot from '../../Components/MainLayout';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startFetchPosts } from '../../Components/redux/action';
import Link from 'next/link';

import { MyPost } from '../../interfaces/interfaces';

export default function Post() {
  const router = useRouter();
  const post: MyPost = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchPosts(router.query.postid));
  }, []);

  return (
    <MainLayot title={`Post: ${router.query.postid}`}>
      <h1>{post && post.title}</h1>
      <hr />
      {post && <p>{post.body}</p>}
      <Link href={'/posts'}>
        <a>Go back</a>
      </Link>
    </MainLayot>
  );
}
