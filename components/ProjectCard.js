import React from 'react';
import styles from '../styles/Home.module.css'

export default function ProjectCard() {
  return (<div>

<div className={styles.container}>
		<header>
			<div className={styles.bio}>
            <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
				<div className={styles.desc}>
					<h3>@carlf</h3>
					<p>Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.</p>
				</div>
			</div>
			


		</header>

		<div className={styles.content}>
			<div className={styles.data}>
				<ul>
					<li>
						2,934
						<span>Tweets</span>
					</li>
					<li>
						1,119
						<span>Followers</span>
					</li>
					<li>
						530
						<span>Following</span>
					</li>
				</ul>
			</div>

			<div className={styles.follow}>
				 <div className={styles.icon}></div> Follow</div>
		</div>

	</div>


  </div>);
}
