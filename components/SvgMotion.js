import { motion } from "framer-motion";
import styles from '../styles/svgMotion.module.css'


export default function SvgMotion() {
      const bar1 = {
        start: {
            d:
            "M0 437L100 437L100 392L200 392L200 423L300 423L300 412L400 412L400 424L500 424L500 350L600 350L600 377L700 377L700 397L800 397L800 392L900 392L900 440L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
        },
        end: {
            d:
            "M0 246L100 246L100 274L200 274L200 224L300 224L300 154L400 154L400 217L500 217L500 238L600 238L600 315L700 315L700 217L800 217L800 302L900 302L900 318L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
        }
        };

        const bar2 = {
            start: {
                d:
                "M0 437L100 437L100 392L200 392L200 423L300 423L300 412L400 412L400 424L500 424L500 350L600 350L600 377L700 377L700 397L800 397L800 392L900 392L900 440L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
            },
            end: {
                d:
                "M0 417L100 417L100 373L200 373L200 299L300 299L300 296L400 296L400 392L500 392L500 366L600 366L600 424L700 424L700 273L800 273L800 297L900 297L900 423L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
            }
            };
           
            const bar3 = {
                start: {
                    d:
                    "M0 530L100 530L100 554L200 554L200 492L300 492L300 507L400 507L400 559L500 559L500 528L600 528L600 487L700 487L700 521L800 521L800 502L900 502L900 523L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
                },
                end: {
                    d:
                    "M0 476L100 476L100 450L200 450L200 496L300 496L300 424L400 424L400 529L500 529L500 460L600 460L600 403L700 403L700 437L800 437L800 410L900 410L900 458L900 601L900 601L800 601L800 601L700 601L700 601L600 601L600 601L500 601L500 601L400 601L400 601L300 601L300 601L200 601L200 601L100 601L100 601L0 601Z"
                }
                };

  return (
    <div className={styles.svg}>
        <motion.svg className={styles.moving}
            initial="start"
            width="900"
            height="600"
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate="end"
        >
            <motion.path
            variants={bar1}
            transition={{
                duration: 5,
                repeatType: "mirror",
                repeat: Infinity
            }}
            fill="#9900ff"
            />

        <motion.path
            variants={bar2}
            transition={{
                duration: 5,
                repeatType: "mirror",
                repeat: Infinity
            }}
            fill="#7700c6"
            />

    <motion.path
            variants={bar3}
            transition={{
                duration: 5,
                repeatType: "mirror",
                repeat: Infinity
            }}
            fill="#560090"
            />  
        </motion.svg>
    </div>
  )
}
