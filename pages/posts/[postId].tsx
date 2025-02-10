import Header from "../../components/Header";
import { GetStaticPaths } from "next";
import posts from "../../public/posts.json";
import styles from "../../styles/Post.module.css";

type postType = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
};

const postDetail = ({ post }: { post: postType[] }) => {
  return (
    <div className={styles.postPage}>
      <Header banner={post[0].title} homeIcon={true} />
      <div className={styles.postOutline}>
        <div className={styles.postContainer}>
          <h1>{post[0].title}</h1>
          <p>{post[0].date}</p>
          <h3>{post[0].description}</h3>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: posts.map((post) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps = (context: { params: { postId: any } }) => {
  const { postId } = context.params;

  return {
    props: {
      post: posts.filter((i) => i.id === postId),
    },
  };
};

export default postDetail;
