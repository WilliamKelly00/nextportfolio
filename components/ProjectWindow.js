import { useState } from 'react'
import styles from '../styles/ProjectWindow.module.css'
import FadeIn from 'react-fade-in';
import { AwesomeButton } from "react-awesome-button";
import Image from 'next/image'

export default function ProjectWindow({name, tags, imageLink, githubLink}) {
    const [isShown, setIsShown] = useState(false);

  return (
    <div className='container'>
        <div className={styles.fakeMenu}>
        <div className={`${styles.fakeButtons} ${styles.fakeClose}`}></div>
        <div className={`${styles.fakeButtons} ${styles.fakeMinimize}`}></div>
        <div className={`${styles.fakeButtons} ${styles.fakeZoom}`}></div>
		<div className={styles.title}>{name}</div>
	  </div>
	  <div className={styles.fakeScreen}
            onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
      <Image
        layout="fill"
        src={imageLink}
        alt={name}
        />

        <div className={styles.blackbg}>
            <FadeIn visible={isShown}>
              <ul className={styles.list}>
                      {tags && tags.map(tag => (
                        <li className={styles.chip}>{tag}</li>
                        ))}
                </ul>
                <div className={styles.abutton}>
                  <AwesomeButton type="link" href={githubLink}>Learn more</AwesomeButton>
                </div>
            </FadeIn>
          </div>
        </div>
    </div>
  )
}
