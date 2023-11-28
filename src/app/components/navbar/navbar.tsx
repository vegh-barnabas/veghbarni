import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href='/' className={styles.navbarItem}>
                Home
            </Link>
            <Link href='/articles' className={styles.navbarItem}>
                Articles
            </Link>
            <Link href='/elte' className={styles.navbarItem}>
                ELTE
            </Link>
            <Link href='/contact' className={styles.navbarItem}>
                Contact
            </Link>
        </nav>
    );
}
