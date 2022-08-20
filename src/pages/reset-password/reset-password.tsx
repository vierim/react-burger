import { useState, ChangeEvent, FormEvent } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { IResetPasswordState } from './interface';

import { updateUserPassword } from '../../utils/api';
import { logErrorToConsole } from '../../utils/utils';

import AnimatedLoader from '../../components/animated-loader';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './reset-password.module.css';

const ResetPassword: React.FC = () => {
  const [state, setState] = useState<IResetPasswordState>({
    password: '',
    token: '',
  });
  const [response, setResponse] = useState(false);
  const [process, setProcess] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcess(true);

    updateUserPassword(state)
      .then((res) => {
        if (res.success) {
          setProcess(false);
          setResponse(true);
        }
      })
      .catch((err) => {
        logErrorToConsole(err);
      })
      .finally(() => {
        setProcess(false);
      });
  };

  return (
    <>
      {process && <AnimatedLoader />}

      {response ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: '/reset-password' },
          }}
        />
      ) : (
        <div className={styles.container}>
          <h1 className="mb-6 text text_type_main-medium">
            Восстановление пароля
          </h1>
          <form className={'mb-20 ' + styles.form} onSubmit={onSubmit}>
            <div className={'mb-6 ' + styles.input}>
              <PasswordInput
                onChange={onChange}
                value={state.password}
                name={'password'}
              />
            </div>
            <div className={'mb-6 ' + styles.input}>
              <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={onChange}
                value={state.token}
                error={false}
                errorText={'Ошибка'}
                name={'token'}
                size={'default'}
              />
            </div>
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </form>
          <p className="mb-4 text text_type_main-default text_color_inactive">
            Вспомнили пароль?{' '}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
