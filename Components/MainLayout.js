import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Main, Nav } from './Styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { searchPosts } from './redux/action';



const MainLayot = ({ children, title = 'Next App' }) => {
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const searchPost = useSelector((state => state.searchPosts))
  // const a = posts.filter(el => el.title.split(' ').includes('aut'))

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />{' '}
        <title> | {title} |</title>
        <meta name="keywords" content="next, js, javascript" />
        <meta name="description" content="next, js, javascript" />
        <meta charSet="utf-8" />
      </Head>
      <Nav>
    

        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
        {users.length > 0 && <>
          <input
            onChange={(e) => dispatch(searchPosts(posts, e.target.value))}
          ></input>
                </>
}
      </Nav>
      <Main>{children}</Main>
    </>
  );
};

export default MainLayot;
