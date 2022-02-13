import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Hero } from '../src/components/Hero/Hero';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>DRK.GDN</title>
      <meta name="description" content="DRK.GDN" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Hero />
    </main>
  </div>
);

export default Home;
