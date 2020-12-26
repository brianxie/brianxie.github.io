import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian Xie</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I'm Brian.
        </h1>

        <p className={styles.body}>
          I'm a
          {' '}<a href="https://youtu.be/tISy7EJQPzI?t=512">software engineer</a>{' '}
          @ Google based in the Bay Area.
        </p>

        <p className={styles.body}>
          Find me elsewhere on the internet:
          {' '}<a href="https://github.com/brianxie">GitHub</a> /
          {' '}<a href="https://linkedin.com/in/brianxie">LinkedIn</a> /
          {' '}<a href="https://twitter.com/brixie_">Twitter</a> /
          {' '}<a href="https://news.ycombinator.com/user?id=brixie">HN</a>
        </p>
      </main>
    </div>
  )
}
