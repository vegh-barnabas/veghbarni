import styles from './page.module.css';

import Link from 'next/link'
import Image from 'next/image'

export default function ArticleThumbnail({
    id,
    title,
    description,
    tag,
    thumbnail,
}) {
    const tags = tag.split(',');

    const tagsHtml = tags.map((tag, index) => (
        <div className={styles.label} key={index}>
            {tag}
        </div>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image
                    src={thumbnail}
                    alt={`Article ${id} image`}
                    className={styles.image}
                />
                <div className={styles.labels}>{tagsHtml}</div>
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.excerpt}>{description}</p>
                    <div className={styles.buttonBar}>
                        <Link href={'/articles/' + id} passHref>
                            <button className={styles.readMoreButton}>Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}