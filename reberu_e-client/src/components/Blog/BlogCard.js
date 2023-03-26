import styles from './BlogEntries.module.css';

export const BlogCard = ({ img, name }) => {
  return (
    <div className={styles.blogCard}>
      <img className={styles['img-card']} src={img} alt="" />
      <div className={styles['card-div']}>
        <h3 className="tm-font-semibold tm-article-title-3">{name}</h3>
        <p style={{ color: 'whitesmoke' }}>
          Nunc in felis aliquet metus luctus iaculis vel et nisi. Nulla venenatis nisl orci, laoreet ultricies massa tristique id.
        </p>
      </div>
    </div>
  );
};
