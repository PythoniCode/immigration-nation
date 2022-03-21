import fs from "fs";
import matter from "gray-matter";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
import Skeleton from "../components/Skeleton";
import { PostMetadata } from "../types/Posts";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((name) => {
    const slug = name.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${name}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage<{ posts: Array<PostMetadata> }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Immigration Nation USA</title>
        <meta name="description" content="Real Stories. Real People." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center w-full my-8 p-4">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-blue-500">Immigration</span>{" "}
          <span className="text-red-500">Nation.</span>
        </h1>
        <h3 className="m-4 text-xl">
          Real stories about the difficult lives of immigrants from around the
          world.
        </h3>
        <div className="content-grid w-full max-w-7xl p-4">
          {posts.map(({ slug, frontmatter }: PostMetadata) => (
            <PostCard key={slug} slug={slug} frontmatter={frontmatter} />
          ))}
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </main>
    </>
  );
};

export default Home;
