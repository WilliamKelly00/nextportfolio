import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import SvgMotion from '../components/SvgMotion'
import {AwesomeButton} from 'react-awesome-button';
import { AwesomeButtonSocial} from 'react-awesome-button';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactSvg}>
      <Fade delay={100}>
        <SvgMotion/>   
        <div className={styles.contactWriting}>
          <h1>Let&apos;s Talk</h1>
        </div>
        <div className={styles.contactButtons}>
          <AwesomeButtonSocial type="github" href="https://github.com/WilliamKelly00" target="_blank"></AwesomeButtonSocial>
          <AwesomeButtonSocial type="linkedin" url="https://www.linkedin.com/in/william-kelly-65b1b5210/"></AwesomeButtonSocial>
          <AwesomeButton type="primary" href="mailto:williammkelly00@gmail.com">📨</AwesomeButton>
        </div>
      </Fade>
      </div>
      <Image src='/lines.png' alt="" width={1920} height={960} />
    </div>
  )
}
