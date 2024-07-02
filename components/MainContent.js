import styles from '../styles/MainContent.module.css';

export default function MainContent() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Enhance Your</h1>
        <h1 className={styles.highlighted}>Knowledge</h1>
        <p>Explore a wide range of tutorials on different subjects, available on all devices.</p>
        <p className={styles.subtext}>Start learning today and achieve your goals.</p>
        <div className={styles.buttonGroup}>
          <button className={styles.startTrialButton}>Start Free Trial</button>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </main>
  );
}
