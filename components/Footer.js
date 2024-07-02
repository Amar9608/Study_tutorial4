import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.foot}>
        <div className={styles.firstColumn}>
          <img src="/Images/logo.jpg" alt="Logo" />
          <p>Terms · Privacy Policy</p>
        </div>
        <div className={styles.secondColumn}>
          <h2>Products</h2>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Data Science</li>
            <li>Marketing</li>
            <li>Business</li>
          </ul>
        </div>
        <div className={styles.thirdColumn}>
          <h2>Resources</h2>
          <ul>
            <li>Documentation</li>
            <li>Tutorials & Guides</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className={styles.fourthColumn}>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Values</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.fifthColumn}>
          <h2>Subscribe</h2>
          <p>Get the latest news and articles to your inbox every month</p>
        </div>
      </div>
    </footer>
  );
}
