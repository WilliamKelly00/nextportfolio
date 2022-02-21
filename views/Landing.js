import styles from '../styles/Home.module.css'
import FadeIn from 'react-fade-in';
import {AwesomeButton} from 'react-awesome-button';


export default function Landing() {
  return (
    <div>
        <div className={styles.body}>
        <div className={styles.svgoverlay}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.svgLine} d="M30 64.1641L50 16.1641" stroke="#4d4d4d"/>
            <path className={styles.svgLine} d="M23 24.1641L5.84089 39.4167C5.39337 39.8144 5.39337 40.5137 5.84088 40.9115L23 56.1641" stroke="#4d4d4d" />
            <path className={styles.svgLine} d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641" stroke="#4d4d4d" />
          </svg>
        </div>
          <FadeIn delay={500} transitionDuration={1000}>
            <video id={styles.video} autoPlay loop muted>
                <source src="/land.mov" type='video/mp4' />
            </video>

            <div className={styles.buttonHolder}>
               <AwesomeButton type="primary" href="/files/Kelly_William.pdf" target="_blank">Resume</AwesomeButton>
            </div>
          </FadeIn>
      </div>
      <div className={styles.landingMobile}>
        <div className={styles.writing}>
        <h1>William Kelly</h1>
        <h3>Software Engineer</h3>
        </div>
        <div className={styles.mobileButtonHolder}>
          <AwesomeButton type="primary" href="/files/Kelly_William.pdf" target="_blank">Resume</AwesomeButton>
        </div>
      </div>
    </div>
  )
}
