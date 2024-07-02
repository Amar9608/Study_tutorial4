// components/VideoSection.js
import styles from '../styles/VideoSection.module.css';

export default function VideoSection() {
  return (
    <div className={styles.video}>
      <div className={styles.bubble1}></div>
      <iframe
        className={styles.videoIframe}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/roBRQupt4J4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className={styles.bubble2}></div>
    </div>
  );
}
