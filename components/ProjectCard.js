import React from 'react';
import styles from '../styles/Project.module.css'

export default function ProjectCard({name, imageLink, description, tags}) {
  return (<div>

<div className={styles.container}>
		<div className={styles.header}>
			<div className={styles.bio}>
            <img className={styles.image} src={imageLink} height="170" width="320" alt="background" className="bg" />
				<div className={styles.desc}>
					<ul className={styles.list}>
						{tags && tags.map(tag => (
							<li className={styles.chip}>{tag}</li>
						))}
{/* 
						<li className={styles.chip}>React</li>
						<li className={styles.chip}>Firebase</li>
						<li className={styles.chip}>NextJs</li>
						<li className={styles.chip}>JavaScript</li> */}
					</ul>
				</div>
			</div>
		</div>

		<div className={styles.content}>
			<h3>{description}</h3>

			<div className={styles.follow}>
				 <div className={`${styles.icon} ${styles.twitter}`}></div> Github</div>
		</div>

	</div>


  </div>);
}
