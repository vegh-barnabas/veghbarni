import styles from './lecture-button.module.css'

export default function LectureButton({ title, videoUrl, codeUrl }) {
    return (
        <>
            <div className={styles.container}>
                <a>{title}</a>
                <div className={styles.v1}></div>
                <a className={styles.icon} href={videoUrl}>🎥</a>
                <div className={styles.v1}></div>
                <a className={styles.icon} href={codeUrl}>🌐</a>
            </div>
        </>
    );
}