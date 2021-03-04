import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <h3>article.. {article.title}</h3>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // getting all the posts
  const articles = await res.json();
  // map through array and return on the id
  const ids = articles.map((article) => article.id);
  // map through array and for each id return an object with
  // params and in params we are going to have an object
  // with the id set toString
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
