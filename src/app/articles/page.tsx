import styles from './page.module.css';

import 'animate.css';

import ArticleThumbnail from './thumbnail/page';

// TODO shorten path in tsconfig.json
import liveserverUrl from '../../../public/imgs/articles/liveserver.png';
import nodejsImgUrl from '../../../public/imgs/articles/nodejs.png';
import phpImgUrl from '../../../public/imgs/articles/php.png';
import vscodeUrl from '../../../public/imgs/articles/vscode.png';
import Navbar from '../components/navbar/navbar';


export default function Articles() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content animate__animated animate__fadeIn">

                <div className={styles.container}>
                    <ArticleThumbnail
                        id="1"
                        title="PHP Installation Guide"
                        description="This guide is about installing PHP the easiest way for Webprogramming classes."
                        tag="ELTE,Webprogramming,PHP"
                        thumbnail={phpImgUrl}></ArticleThumbnail>
                    <ArticleThumbnail
                        id="2"
                        title="VSCode Must-have Addons"
                        description="Best addons to have for Server Side Webprogramming classes."
                        tag="ELTE,Server-Side"
                        thumbnail={vscodeUrl}></ArticleThumbnail>
                    <ArticleThumbnail
                        id="3"
                        title="Live Server"
                        description="Guide to using Live Server extension for modern Javascript development for Webprogramming classes."
                        tag="ELTE,Webprogramming,JavaScript"
                        thumbnail={liveserverUrl}></ArticleThumbnail>
                    <ArticleThumbnail
                        id="4"
                        title="Node.js Installation Guide"
                        description="Guide to installing Node.js on Windows/Linux/Mac OS operating systems."
                        tag="ELTE,Server-side,Client-side,JavaScript"
                        thumbnail={nodejsImgUrl}
                    />
                    <ArticleThumbnail
                        id="5"
                        title="Some other stuff"
                        description="Guide to installing Node.js on Windows/Linux/Mac OS operating systems."
                        tag="ELTE,Server-side,Client-side,JavaScript"
                        thumbnail={nodejsImgUrl}
                    />
                </div>
            </div>
        </>
    );
}
