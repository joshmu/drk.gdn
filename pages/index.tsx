import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Server } from '../src/components/Server/Server';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>DRK.GDN</title>
      <meta name="description" content="DRK.GDN" />
      <meta name='robots' content='noindex, nofollow' />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Server />
    </main>
  </div>
);

export default Home;
