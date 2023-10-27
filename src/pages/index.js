import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Main from '@/components/Main/Main'
import Nav from '@/components/Nav/Nav'
import FAQ from '@/components/FAQ/FAQ'

export default function Home() {
  return (
    <>
      <Head>
        <title>KoinX Assignment</title>
        <meta name="description" content="Crypto Exchange" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Nav/>
        <Main/>
        <FAQ/>
      </main>
    </>
  )
}
