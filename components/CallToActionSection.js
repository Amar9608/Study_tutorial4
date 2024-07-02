import styles from '../styles/CallToActionSection.module.css';

export default function CallToActionSection() {
  return (
    <div className={styles.callToActionSection}>
      <div className={styles.firstSide}>
        <h1>Ready to get started?</h1>
        <p>We offer a generous free tier to get you started with your learning journey right away.</p>
      </div>
      <div className={styles.secondSide}>
        <button className={styles.getStartedButton}>Get Started for Free</button>
      </div>
    </div>
  );
}
