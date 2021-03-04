import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="keyword" content="add here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next.js</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
