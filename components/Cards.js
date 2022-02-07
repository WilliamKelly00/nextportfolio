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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
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
                    <div className={styles.content}>1
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
                    </div>
                </div>
            </div>
    </div>
  </div>
  );
}
