import styles from '../styles/Home.module.css'
import ProjectWindow from '../components/ProjectWindow'
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';


export default function Projects() {
  return (
    <div>
      {/* <div className={styles.projBG}>
      <Image src='/lines.png' alt="" width={1920} height={1080} />
      </div> */}

      <div className={styles.projectHolder}>
      <Fade delay={100}>
        <div className={styles.slanted}>
          <ProjectWindow name={"Next Blog"} tags={["React", "Next", "Firebase", "JavaScript", "CSS"]} imageLink={'/blogFrontpage.png'} githubLink={'https://github.com/WilliamKelly00/nextblog'}/>
        </div>
        <h1>Hello world!</h1>

        <h1>Hello world!</h1>
        <div className={styles.slantedNegative}>
          <ProjectWindow name={"Price Tracker"} tags={["React", "Firebase", "Api", "JavaScript", "Agile", "CSS"]} imageLink={'/priceFollow.png'} githubLink={'https://github.com/WilliamKelly00/AmazonTracker'}/>
        </div>
        <div className={styles.slanted}>
          <ProjectWindow name={"Discord Finder"} tags={["React", "Redis", "Full-text Search", "JavaScript", "CSS"]} imageLink={'/discordFinder.png'} githubLink={'https://github.com/WilliamKelly00/discordfinder'}/>
        </div>
        <h1>Hello world!</h1>

        <h1>Hello world!</h1>
        <div className={styles.slantedNegative}>
          <ProjectWindow name={"B+ Tree"} tags={["Java", "JUnit", "Data Structures", "Algorithms"]} imageLink={'/inmembTree.png'} githubLink={'https://github.com/WilliamKelly00'}/>
        </div>
      </Fade>
      </div>
    </div> 
  )
}
