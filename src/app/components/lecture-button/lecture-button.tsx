import styles from "./lecture-button.module.css";

interface LectureButtonProperties {
  title: string;
  videoUrl: string;
  codeUrl: string;
}

export default function LectureButton({
  title,
  videoUrl,
  codeUrl,
}: LectureButtonProperties) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <div className={styles.v1} />
      <a className={styles.icon} href={videoUrl}>
        🎥
      </a>
      <div className={styles.v1} />
      <a className={styles.icon} href={codeUrl}>
        🌐
      </a>
    </div>
  );
}
