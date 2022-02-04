import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "first-post" } },
      { params: { slug: "second-post" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("context", slug);
  const post = await getPost(slug);

  return {
    props: { post },
  };
}

function PostPage({ post: { title, body, date } }) {
  console.log("[First Post] render");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
        <p>
          <small>{date}</small>
        </p>
        <article dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </>
  );
}

export default PostPage;
