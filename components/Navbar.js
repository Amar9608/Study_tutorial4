// components/Navbar.js
import styles from '../styles/Navbar.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/Images/logo.jpg" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Blog</li>
        <li className={styles.dropdown}>
          Resources
          <KeyboardArrowDownIcon />
        </li>
      </ul>
      <div className={styles.navbarbutton}>
        <button className={styles.signinButton}>Sign in</button>
        <button className={styles.signupButton}>
          Sign up
          <ArrowRightAltIcon />
        </button>
      </div>
    </nav>
  );
}
