import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from '../components/cards'
import FadeIn from 'react-fade-in';
import { useState } from 'react'
import AButton from '../components/AButton'
import ProjectWindow from '../components/ProjectWindow'
import { AwesomeButtonSocial} from 'react-awesome-button';
import {AwesomeButton} from 'react-awesome-button';
import SvgMotion from '../components/SvgMotion';

export default function Home() {

  const [vis, setVis] = useState(false);
  return (
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
          <FadeIn delay={500} transitionDuration={1000}>
            <video id={styles.video} autoPlay loop muted>
                <source src="/land.mov" type='video/mp4' />
            </video>

            <div className={styles.buttonHolder}>
              <AwesomeButton type="primary">Resume</AwesomeButton>;
            </div>
          </FadeIn>
      </div>

    <div className={styles.imageProjects}>
    <FadeIn className={styles.projectHolder} transitionDuration={1000}>
      <ProjectWindow name={"project 1"} tags={["react", "test", "test"]}/>
      <ProjectWindow name={"project 1"} tags={["react", "test", "test"]}/>
      <ProjectWindow name={"project 1"} tags={["react", "test", "test"]}/>
      <ProjectWindow name={"project 1"} tags={["react", "test", "test"]}/>
    </FadeIn>
    <Image src='/../public/lines.png' width={1920} height={960} />
    </div> 
    
    <Cards/>

    <div className={styles.contact}>
      <div className={styles.contactSvg}>
        <SvgMotion/>   
        <div className={styles.contactWriting}>
          <h1>Let's Talk</h1>
        </div>
        <div className={styles.contactButtons}>
          <AwesomeButtonSocial type="github" href="https://github.com/WilliamKelly00" target="_blank"></AwesomeButtonSocial>
          <AwesomeButtonSocial type="linkedin" url="https://www.linkedin.com/in/william-kelly-65b1b5210/"></AwesomeButtonSocial>
          <AwesomeButton type="primary">📨</AwesomeButton>
        </div>
      </div>
    <Image src='/../public/lines.png' width={1920} height={960} />
    </div>

    </div>
  )
}
