import React from 'react';
import styles from '../styles/Project.module.css'

export default function ProjectCard() {
  return (<div>

<div className={styles.container}>
		<div className={styles.header}>
			<div className={styles.bio}>
            <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
				<div className={styles.desc}>
					<ul className={styles.list}>
						<li className={styles.chip}>React</li>
						<li className={styles.chip}>Firebase</li>
						<li className={styles.chip}>NextJs</li>
						<li className={styles.chip}>JavaScript</li>
					</ul>
				</div>
			</div>
		</div>

		<div className={styles.content}>
			<p>blogging site made with nextjs and Firebase</p>

			<div className={styles.follow}>
				 <div className={`${styles.icon} ${styles.twitter}`}></div> Follow</div>
		</div>

	</div>


  </div>);
}
