"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link
        href="/"
        scroll={false}
        className={`${styles.navbarItem} ${
          pathName === "/" ? styles.navbarActive : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/articles"
        scroll={false}
        className={`${styles.navbarItem} ${
          pathName === "/articles" ? styles.navbarActive : ""
        }`}
      >
        Articles
      </Link>
      <Link
        href="/elte"
        scroll={false}
        className={`${styles.navbarItem} ${
          pathName === "/elte" ? styles.navbarActive : ""
        }`}
      >
        ELTE
      </Link>
      <Link
        href="/contact"
        scroll={false}
        className={`${styles.navbarItem} ${
          pathName === "/contact" ? styles.navbarActive : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
