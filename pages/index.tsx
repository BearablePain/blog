import Link from 'next/link';
import Head from 'next/head';
import MainLayot from '../Components/MainLayout';

export default function Index() {
  return (
    <MainLayot title={'Home'}>
      <h1>Hello Test</h1>
      <p>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </p>
    </MainLayot>
  );
}
