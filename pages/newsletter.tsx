import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styles from "~/styles/Newsletter.module.scss";
import type { Newsletter, Post } from "~/fetch/substack";
import { fetchSubstack } from "~/fetch/substack";
interface APIArticle {
  title: string;
  description: string;
  thumbnail?: string;
  link: string;
  categories: Array<string>;
  publishedAt: string;
}

export function Article(props: { article: Post }) {
  return (
    <div key={props.article.guid}>
      <h2>
        <a href={props.article.link}>{props.article.title}</a>
      </h2>
      <p>{props.article.description}</p>
      {/*  <p>
        {" "}
        {"Tagged: "}{" "}
        {props.article.categories.map((category) => (
          <span className={styles["status-line"]}> {category} </span>
        ))}{" "} 
        </p> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  newsletter: Newsletter;
}> = async () => {
  return { props: { newsletter: await fetchSubstack() } };
};

export default function Newsletter({
  newsletter,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.newsletter}>
      <h1>Newsletter</h1>
      <div className={styles["posts-list"]}>
        {newsletter.posts.map((post) => (
          <Article article={post} />
        ))}
      </div>
    </div>
  );
}
