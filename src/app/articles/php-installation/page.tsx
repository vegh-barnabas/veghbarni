import styles from "./page.module.css";

import "animate.css";
import { FaChevronRight } from "react-icons/fa";

import Navbar from "../../components/navbar/navbar";
import Link from "next/link";

export default function Articles() {
  return (
    <>
      <Navbar />

      <div className="content animate__animated animate__fadeIn">
        <span>
          <Link href="/articles">Articles</Link>
          <FaChevronRight className={styles.chevron} />
          PHP Installation Guide
        </span>
        <div className={styles.article}>
          <h2>Hello</h2>
        </div>
      </div>
    </>
  );
}
