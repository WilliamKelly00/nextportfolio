import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
   <div> 
    <Head>
        <title>William Kelly</title>
        <meta name="description" content="William Kelly portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>
        <div className={styles.svgoverlay}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 64.1641L50 16.1641" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23 24.1641L5.84089 39.4167C5.39337 39.8144 5.39337 40.5137 5.84088 40.9115L23 56.1641" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

            <video id={styles.video} autoPlay loop muted>
                <source src="/land.mov" type='video/mp4' />
            </video>
      </div>


    </div>
  )
}
