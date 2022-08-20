import { Link } from 'react-router-dom';

import styles from './not-found.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-large mb-8">
        404 ошибка
      </p>
      <p className="text text_type_main-large mb-20">
        Страницы не существует
      </p>
      <p className="mb-4 text text_type_main-default text_color_inactive">
        Попробуйте поискать на{' '}
        <Link to="/" className={styles.link}>
          главной странице
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
