import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job Listings Page</title>
        <meta name="description" content="Find your next job!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
