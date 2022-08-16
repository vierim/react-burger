import styles from './error-notification.module.css';

const ErrorNotification = () => {

  return (
    <div className={styles.container}>
      <p className="text text_type_main-large mb-10">При загрузке данных с сервера произошла ошибка.</p>
      <p className="text text_type_main-large">Попробуйте перезагрузить страницу.</p>
    </div>
  );
}

export default ErrorNotification;
