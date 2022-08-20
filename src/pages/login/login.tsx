import { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';

import { ILoginState } from './interface';

import AnimatedLoader from '../../components/animated-loader';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { sendLoginRequestThunk } from '../../services/actions/auth/thunks';

import styles from './login.module.css';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const { sendRequest } = useSelector((store) => store.user);

  const [state, setState] = useState<ILoginState>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(sendLoginRequestThunk(state));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {sendRequest && <AnimatedLoader />}

      <div className={styles.container}>
        <h1 className="mb-6 text text_type_main-medium">Вход</h1>
        <form onSubmit={handleSubmit} className={'mb-20 ' + styles.form}>
          <div className={'mb-6 ' + styles.input}>
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={handleChange}
              value={state.email}
              error={false}
              errorText={'Ошибка'}
              name={'email'}
            />
          </div>
          <div className={'mb-6 ' + styles.input}>
            <PasswordInput
              onChange={handleChange}
              value={state.password}
              name={'password'}
            />
          </div>
          <Button type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className="mb-4 text text_type_main-default text_color_inactive">
          Вы — новый пользователь?{' '}
          <Link to="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{' '}
          <Link to="/forgot-password" className={styles.link}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
