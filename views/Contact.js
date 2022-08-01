import styles from '../styles/Home.module.css'
import { Fade } from 'react-awesome-reveal'
import SvgMotion from '../components/SvgMotion'
import {AwesomeButton} from 'react-awesome-button';
import { AwesomeButtonSocial} from 'react-awesome-button';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactSvg}>
        <SvgMotion/>   
        <div className={styles.contactWriting}>
          <h1>Let&apos;s Talk</h1>
        </div>
        <div className={styles.contactButtons}>
          <AwesomeButtonSocial type="github" href="https://github.com/WilliamKelly00" target="_blank"></AwesomeButtonSocial>
          <AwesomeButtonSocial type="linkedin" url="https://www.linkedin.com/in/williamkelly00/"></AwesomeButtonSocial>
          <AwesomeButton type="primary" href="mailto:williammkelly00@gmail.com">📨</AwesomeButton>
        </div>
      </div>
    </div>
  )
}
