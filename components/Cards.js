import styles from '../styles/Card.module.css'

export default function Cards() {
  return(
    <div className={styles.bodyC}>
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={`${styles.face} ${styles.face1}`}>
                    <div className={styles.content}>
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                        <h3>Design</h3>
                    </div>
                </div>
                <div className={`${styles.face} ${styles.face2}`}>
                    <div className={styles.content}>
                        <p>Skilled in designing optimal solutions to complex problems, software architecture design, and innovating end-to-end user experiences.</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={`${styles.face} ${styles.face1}`}>
                    <div className={styles.content}>
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                        <h3>Code</h3>
                    </div>
                </div>
                <div className={`${styles.face} ${styles.face2}`}>
                    <div className={styles.content}>
                        <p>Experienced in implementing solutions in various languages, frameworks, and environments. Skilled in both static and dynamic code analysis.</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={`${styles.face} ${styles.face1}`}>
                    <div className={styles.content}>
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                        <h3>Launch</h3>
                    </div>
                </div>
                <div className={`${styles.face} ${styles.face2}`}>
                    <div className={styles.content}>
                        <p>Proficient in deploying and maintaining applications, containerizing applications, and orchestrating infrastructure.</p>
                    </div>
                </div>
            </div>
    </div>
  </div>
  );
}
