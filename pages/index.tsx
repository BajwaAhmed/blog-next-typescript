import Layout from "@/components/layout/Layout";
import PostList from "@/components/posts/PostList";
import Post from "@/types/post";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Nextjs Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Posts">
        <PostList posts={posts} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
};
