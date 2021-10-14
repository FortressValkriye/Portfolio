
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "~/components/layout";
import { getMediumArticle } from "article-api";
import styles from "~/styles/Newsletter.module.scss";
interface Article {
    title: string,
    description: string,
    thumbnail?: string,
    link: string,
    categories: Array<string>,
    publishedAt: string
};

interface APIArticle {
    title: string,
    description: string,
    thumbnail?: string,
    link: string,
    categories: Array<string>,
    publishedAt: string
};



export const getServerSideProps: GetServerSideProps<{
    posts: Array<Article>
    }> = async (props) => {
    
        
        return {
        props: {
            posts: [...(await getMediumArticle({
                user: "Nefomemes"
            }) as Array<APIArticle>)].map((article) => {
                article.publishedAt = article.publishedAt.toString();

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
                posts.map((post) => (
                    <div key={post.link}>
                        <h2><a href={post.link}>{ post.title }</a></h2>
                        <h4>{ post.description }</h4>
                        <p> { "Tagged: " } { post.categories.map((category) => <span className={styles["status-line"]}> { category } </span>) } </p>
                    </div>
                ))
            }</div>
        </div>
  
)
}