import styles from '../styles/Home.module.css'
import ProjectWindow from '../components/ProjectWindow'
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';


export default function Projects() {
  return (
    <div>
    <div className={styles.imageProjects}>
      <div className={styles.projectHolder}>
    <Fade delay={100}>
        <ProjectWindow name={"Next Blog"} tags={["React", "Next", "Firebase", "JavaScript", "CSS"]} imageLink={'/blogFrontpage.png'} githubLink={'https://github.com/WilliamKelly00/nextblog'}/>
        <ProjectWindow name={"Price Tracker"} tags={["React", "Firebase", "Api", "JavaScript", "Agile", "CSS"]} imageLink={'/priceFollow.png'} githubLink={'https://github.com/WilliamKelly00/AmazonTracker'}/>
        <ProjectWindow name={"Discord Finder"} tags={["React", "Redis", "Full-text Search", "JavaScript", "CSS"]} imageLink={'/discordFinder.png'} githubLink={'https://github.com/WilliamKelly00/discordfinder'}/>
        <ProjectWindow name={"B+ Tree"} tags={["Java", "JUnit", "Data Structures", "Algorithms"]} imageLink={'/inmembTree.png'} githubLink={'https://github.com/WilliamKelly00'}/>
    </Fade>
      </div>
    <Image src='/lines.png' alt="" width={1920} height={1080} />
    </div> 
    </div>
  )
}
