import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import posts from "../public/posts.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header banner="خوش آمدید" />
      <div className={styles.homeContent}>
        {posts.map((post) => (
          <Link
            className={styles.contentBox}
            key={post.id}
            href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
