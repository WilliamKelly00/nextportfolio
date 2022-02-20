import Head from 'next/head'
import Cards from '../components/Cards'
import Footer from '../components/Footer';
import TwoWaves from '../components/TwoWaves';
import Landing from '../views/Landing';
import Projects from '../views/Projects'
import Contact from '../views/Contact'

export default function Home() {

  return (
   <div> 
    <Head>
        <title>William Kelly</title>
        <meta name="description" content="William Kelly portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Landing/>
      <Projects/>
      <TwoWaves/>
      <Cards/>      
      <Contact/>
      <Footer/>

    </div>
  )
}
