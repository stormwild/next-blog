import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
  const post = await getPost("first-post");

  return {
    props: { post },
  };
}

function FirstPost({ post: { title, body } }) {
  console.log("[First Post] render");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
        <article dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </>
  );
}

export default FirstPost;
