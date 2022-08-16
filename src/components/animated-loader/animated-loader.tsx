import styles from './animated-loader.module.css';

const AnimatedLoader = () => {
  return(
    <div className={styles.container}>
      <div className={styles.loader}>
        <span></span>
      </div>
    </div>
  );
}

export default AnimatedLoader;
