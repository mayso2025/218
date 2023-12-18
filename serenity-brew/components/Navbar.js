import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.homeItem}>Serenity</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/CommonSelections" className={styles.navLink}>Common Selections </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Specials" className={styles.navLink}>Specials</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Contacts" className={styles.navLink}>Contacts</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/About" className={styles.navLink}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
