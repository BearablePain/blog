import { useRouter } from 'next/router';
import Head from 'next/head';
import MainLayot from '../../Components/MainLayout';

export default function About() {
  
  const router = useRouter();
  const linkClickHandler = (path) => {
    router.push(path);
  };

  return (
    <MainLayot title = {'About'}>
    
      <h1>О нас</h1>
      <button onClick={() => linkClickHandler('/')}>Go back to Home</button>
      <button onClick={() => linkClickHandler('/posts')}>
        Go back to Posts
      </button>
    </MainLayot>
  );
}

// About.getInitialProps = async () => {
//   const responce = await fetch(`http://localhost:4200/about`);
//   const data = await responce.json();
//   return { title: data.title };
// }
