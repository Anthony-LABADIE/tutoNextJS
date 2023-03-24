import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export default function Home({ allPostsData }: any) {

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <h2>Blog</h2>
      </section>
      {allPostsData.map((post: any) => (
        <Link href={`/posts/${post.id}`}>
        <div key={post.id}>
          <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
