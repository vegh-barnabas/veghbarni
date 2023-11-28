import styles from './page.module.css';

import 'animate.css';

import Navbar from '../components/navbar/navbar';
import LectureButton from '../components/lecture-button/lecture-button';

export default function Elte() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content animate__animated animate__fadeIn">
                <h2>Webprogramming 22/23-1</h2>
                <h3>Lists:</h3>
                <p>OneDrive (videos)</p>
                <p>GitHub (files)</p>
                <h3>Direct download:</h3>
                <div className={styles.lectures}>
                    <LectureButton
                        title="Lecture 1"
                        videoUrl="http://veghbarni.web.elte.hu/"
                        codeUrl="http://veghbarni.web.elte.hu/"></LectureButton>
                    <LectureButton
                        title="Lecture 2"
                        videoUrl="http://veghbarni.web.elte.hu/"
                        codeUrl="http://veghbarni.web.elte.hu/"></LectureButton>
                    <LectureButton
                        title="Lecture 3"
                        videoUrl="http://veghbarni.web.elte.hu/"
                        codeUrl="http://veghbarni.web.elte.hu/"></LectureButton>
                    <LectureButton
                        title="Lecture 4"
                        videoUrl="http://veghbarni.web.elte.hu/"
                        codeUrl="http://veghbarni.web.elte.hu/"></LectureButton>
                </div>
            </div>
        </>
    );
}
