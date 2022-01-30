import Head from "next/head";
import NavBar from "../components/NavBar";

function About() {
  console.log("[About] render");
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <h1>About Page of My Blog</h1>
      </main>
    </>
  );
}

export default About;
