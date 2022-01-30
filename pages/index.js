import Head from "next/head";

function HomePage() {
  console.log("[HomePage] render");
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Home Page of My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
