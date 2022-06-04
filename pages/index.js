import Head from 'next/head'
import Cards from '../components/Cards'
import Footer from '../components/Footer';
import TwoWaves from '../components/TwoWaves';
import Landing from '../views/Landing';
import Projects from '../views/Projects'
import Contact from '../views/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
   <div> 
      <Head>
        <title>William Kelly</title>
        <meta name="description" content="William Kelly portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

    <div className={styles.container}>
    <div style={{
      backgroundImage: "url(" + "/lines3.png" + ")",
      width: "100%",
      height:"100%",
      backgroundRepeat: "repeat-y",
      backgroundPosition: "center"
    }}>
      <Landing/>
      <div className={styles.arlink}>
        <a href='https://williamkelly00.github.io/resume_spray/'>Explore my portfolio in Augmented Reality</a>
      </div>
      <Projects/>
      <TwoWaves/>
      <Cards/>      
      <Contact/>
      <Footer/>
    </div>
    </div>

    </div>
  )
}
