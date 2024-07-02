// components/TestimonialsSection.js
import styles from '../styles/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.column}>
        <img src="/Images/mit.gif" alt="MIT" />
        <div className={styles.buttonGroup}>
          <button className={styles.caseStudiesButton}>Case Studies</button>
          <button className={styles.institutionButton}>MIT</button>
        </div>
        <h1>“How MIT leverages our platform for their online courses.”</h1>
        <div className={styles.imageLogo}>
          <img src="/Images/amar.jpg" alt="Amarnath" />
          <p>by Amarnath</p>
        </div>
      </div>
      <div className={styles.column}>
        <img src="/Images/harvard.jpg" alt="Harvard" />
        <div className={styles.buttonGroup}>
          <button className={styles.caseStudiesButton}>Case Studies</button>
          <button className={styles.institutionButton}>Harvard</button>
        </div>
        <h1>“Harvard's success with our interactive learning tools.”</h1>
        <div className={styles.imageLogo}>
          <img src="/Images/amar.jpg" alt="Amarnath" />
          <p>by Amarnath</p>
        </div>
      </div>
      <div className={styles.column}>
        <img src="/Images/coursera.jpg" alt="Coursera" />
        <div className={styles.buttonGroup}>
          <button className={styles.caseStudiesButton}>Case Studies</button>
          <button className={styles.institutionButton}>Coursera</button>
        </div>
        <h1>“Coursera's integration with our platform for enhanced learning.”</h1>
        <div className={styles.imageLogo}>
          <img src="/Images/amar.jpg" alt="Amarnath" />
          <p>by Amarnath</p>
        </div>
      </div>
    </div>
  );
}
