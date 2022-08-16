import styles from './feed-image.module.css';

interface IFeedImageProps {
  image: string;
  more?: number;
  overlap: number;
}

const FeedImage = (props: IFeedImageProps) => {
  const { image, more, overlap } = props;

  return (
    <div className={styles.container} style={{ zIndex: overlap }}>
      <div className={styles.back}></div>
      <img className={styles.image} src={image} alt="" />
      {more && (
        <div className={styles.more}>
          <p className="text text_type_main-default">+{more}</p>
        </div>
      )}
    </div>
  );
};

export default FeedImage;
