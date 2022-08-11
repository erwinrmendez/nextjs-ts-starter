import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="max-w-md p-5 mx-auto">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-center">Hello there!</h1>
      </main>
    </div>
  );
};

export default Home;
