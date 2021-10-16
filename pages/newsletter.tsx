
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "~/components/layout";
import { getMediumArticle } from "article-api";
import styles from "~/styles/Newsletter.module.scss";
import { randomUUID } from "crypto";
interface APIArticle {
    title: string,
    description: string,
    thumbnail?: string,
    link: string,
    categories: Array<string>,
    publishedAt: string,

};

interface Article {
    title: string,
    description: string,
    thumbnail?: string,
    link: string,
    categories: Array<string>,
    publishedAt: string;
    uuid: string;
};

export function Article(props: {article: Article}){
    return ( <div key={props.article.uuid}>
        <h2><a href={props.article.link}>{ props.article.title }</a></h2>
        <p>{ props.article.description }</p>
        <p> { "Tagged: " } { props.article.categories.map((category) => <span className={styles["status-line"]}> { category } </span>) } </p>
    </div>)
}

export const getServerSideProps: GetServerSideProps<{
    posts: Array<Article>
    }> = async (props) => {
    
        
        return {
        props: {
            posts: [...(await getMediumArticle({
                user: "Nefomemes"
            }) as Array<Article>)].map((article) => {
                article.publishedAt = article.publishedAt.toString();
                article.uuid = randomUUID();
                return article;
            })
        }
    }
}

export default function Newsletter({ posts } : InferGetServerSidePropsType<typeof getServerSideProps>){
return (


        <div className={styles.newsletter}>
            <h1>Newsletter</h1>
            <div className={styles["posts-list"]}>{   
                posts.map((post) => <Article article={post}/>)
            }</div>
        </div>
  
)
}