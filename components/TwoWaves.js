import { motion } from "framer-motion";
import styles from '../styles/Waves.module.css'
import { Fade } from "react-awesome-reveal";


export default function TwoWaves() {
      const waveBot = {
        start: {
            d:
            "M0 419L50 433.8C100 448.7 200 478.3 300 466.2C400 454 500 400 600 373.3C700 346.7 800 347.3 850 347.7L900 348L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z"
        },
        end: {
            d:
            "M0 447L50 429.2C100 411.3 200 375.7 300 379.8C400 384 500 428 600 439.3C700 450.7 800 429.3 850 418.7L900 408L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z"
        }
        };

        // const waveTop = {
        //     start: {
        //         d:
        //         "M0 146L50 157.7C100 169.3 200 192.7 300 191.5C400 190.3 500 164.7 600 144C700 123.3 800 107.7 850 99.8L900 92L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
        //     },
        //     end: {
        //         d:
        //         "M0 179L50 164.2C100 149.3 200 119.7 300 131.8C400 144 500 198 600 224.7C700 251.3 800 250.7 850 250.3L900 250L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
        //     }
        //     };
  return (
    <div className={styles.svg}>
        <Fade triggerOnce delay={700} duration={1000}>
        <div className={styles.writing}>
        <h1>Interested in solving complex problems, developing scalable systems, and improving user experiences.</h1>
        </div>
        </Fade>
        <motion.svg className={styles.moving}
            initial="start"
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate="end"
            >
            <motion.path
            variants={waveBot}
            transition={{
                duration: 4,
                repeatType: "mirror",
                repeat: Infinity
            }}
            fill="#FBAE3C"
            />

        {/* <motion.path
            variants={waveTop}
            transition={{
                duration: 4,
                repeatType: "mirror",
                repeat: Infinity
            }}
            fill="#FBAE3C"
        /> */}
        </motion.svg>
    </div>
  )
}
