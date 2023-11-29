import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import styles from "./article-thumbnail.module.css";

interface ArticleThumbnailProperties {
  id: string;
  title: string;
  description: string;
  tag: string;
  thumbnail: StaticImageData;
}

export default function ArticleThumbnail({
  id,
  title,
  description,
  tag,
  thumbnail,
}: ArticleThumbnailProperties) {
  const tags = tag.split(",");

  const tagsHtml = tags.map((value) => (
    <div className={styles.label} key={value}>
      {value}
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
            <Link href={`/articles/${id}`} passHref>
              <button type="button" className={styles.readMoreButton}>
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
