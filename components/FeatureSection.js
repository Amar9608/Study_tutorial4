// components/FeatureSection.js
import styles from '../styles/FeatureSection.module.css';

export default function FeatureSection() {
  return (
    <div className={styles.featureSection}>
      <div className={styles.firstSide}>
        <div className={styles.box1}>
          <h1>Comprehensive Learning Tools</h1>
          <p>Access a variety of resources to help you learn effectively and efficiently.</p>
        </div>
        <div className={styles.box2}>
          <h2>Interactive Tutorials</h2>
          <p>Engage with hands-on tutorials designed to enhance your understanding.</p>
        </div>
        <div className={styles.box3}>
          <h2>Expert Instructors</h2>
          <p>Learn from industry experts who share their knowledge and experience.</p>
        </div>
        <div className={styles.box4}>
          <h2>Community Support</h2>
          <p>Join our community to collaborate and grow with other learners.</p>
        </div>
      </div>
      <div className={styles.secondSide}>
        <img src="/Images/students.jpg" alt="Students" />
      </div>
    </div>
  );
}
