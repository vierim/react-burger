import styles from './show-loading.module.css';

const ShowLoading = () => {

  return (
    <div className={styles.container}>
      <p className="text text_type_main-large mb-10">Загрузка данных...</p>
    </div>
  );
}

export default ShowLoading;
