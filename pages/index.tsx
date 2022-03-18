import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Immigration Nation USA</title>
        <meta name="description" content="Real Stories. Real People." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center w-4/5 my-8 p-4">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-blue-500">Immigration</span>{" "}
          <span className="text-red-500">Nation.</span>
        </h1>
        <h3 className="m-4 text-xl">
          Read real stories about the difficult lives of immigrants from around
          the world.
        </h3>
        <div className="content-grid w-full max-w-7xl">
          <div className="flex flex-col w-full h-36 rounded gap-2 animate-pulse">
            <div className="h-4 w-full bg-neutral-200"></div>
            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            <div className="h-20 w-full bg-neutral-200"></div>
          </div>
          <div className="flex flex-col w-full h-36 rounded gap-2 animate-pulse">
            <div className="h-4 w-full bg-neutral-200"></div>
            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            <div className="h-20 w-full bg-neutral-200"></div>
          </div>
          <div className="flex flex-col w-full h-36 rounded gap-2 animate-pulse">
            <div className="h-4 w-full bg-neutral-200"></div>
            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            <div className="h-20 w-full bg-neutral-200"></div>
          </div>
          <div className="flex flex-col w-full h-36 rounded gap-2 animate-pulse">
            <div className="h-4 w-full bg-neutral-200"></div>
            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            <div className="h-20 w-full bg-neutral-200"></div>
          </div>
          <div className="flex flex-col w-full h-36 rounded gap-2 animate-pulse">
            <div className="h-4 w-full bg-neutral-200"></div>
            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            <div className="h-20 w-full bg-neutral-200"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
