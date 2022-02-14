import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer>
        <div className={styles.copyright}>
            <p>© 2022 William Kelly. All rights reserved.</p>
            <a href="https://github.com/WilliamKelly00/nextportfolio">view code</a>
        </div>
        <div className={styles.gradient}></div>
    </footer>
  )
}
