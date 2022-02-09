import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from '../components/cards'
import ProjectCard from '../components/ProjectCard'
import FadeIn from 'react-fade-in';
import { useState } from 'react'
import AButton from '../components/AButton'

export default function Home() {

  const [vis, setVis] = useState(false);

  return (
    // <div className={styles.container}>
   <div> 
    <Head>
        <title>William Kelly</title>
        <meta name="description" content="William Kelly portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.body}>
        <div className={styles.svgoverlay}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.svgLine} d="M30 64.1641L50 16.1641" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" />
            <path className={styles.svgLine} d="M23 24.1641L5.84089 39.4167C5.39337 39.8144 5.39337 40.5137 5.84088 40.9115L23 56.1641" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" />
            <path className={styles.svgLine} d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
          <FadeIn delay={500} transitionDuration={1500}>
            <video id={styles.video} autoPlay loop muted>
                <source src="/land.mov" type='video/mp4' />
            </video>

            <div className={styles.buttonHolder}>
              <AButton/>
            </div>
          </FadeIn>
      </div>

    <Cards/>

    <div className={styles.projectHolder}>
      <ProjectCard  name={"test"} tags={["react", "test", "test"]} description={"exampleDescription"} imageLink={"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"}/>
      <ProjectCard  />
    </div> 



    <FadeIn visible={vis}>
      <h1>
        Faded
      </h1>
      <h1>
        Faded
      </h1>
      <h1>
        Faded
      </h1>
      <h1>
        Faded
      </h1>
      <h1>
        Faded
      </h1>
    </FadeIn>

    <button onClick={() => setVis(!vis)}>
      Click for Fades
    </button>
    </div>
  )
}
