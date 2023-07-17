import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { introText, secondaryText } from '../public/introText';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> {introText}</p>
        <p>{secondaryText}<a href="https://nextjs.org/learn">our Next.js tutorial</a></p>
      </section>
    </Layout>
  );
}
