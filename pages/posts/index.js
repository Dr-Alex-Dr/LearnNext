import styles from "../../styles/Posts.module.scss";
import Link from "next/dist/client/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {posts: data}
    }
};


const Posts = ({posts}) => {
    return (
        <>
            <div className={styles.container}>
            <h1>Posts list:</h1>
            <ul>
                {posts && posts.map( ({id, title}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
    </div>
    </>
    )
  }
  
  export default Posts;