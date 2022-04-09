import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './reset-password.module.css';;

const ResetPassword = () => {

  const [value, setValue] = useState('');
  const [pass, setPass] = useState('')

  const onChange = e => {
    setPass(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className="mb-6 text text_type_main-medium">Восстановление пароля</h1>
      <form className={'mb-20 ' + styles.form}>
        <div className={'mb-6 ' + styles.input}>
          <PasswordInput 
            onChange={onChange} 
            value={pass} 
            name={'password'} 
          />
        </div>
        <div className={'mb-6 ' + styles.input}>
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onChange} 
            value={value} 
            error={false}
            errorText={"Ошибка"}
            name={'name'}
            size={"default"}
          />
        </div>        
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className="mb-4 text text_type_main-default text_color_inactive">
        Вспомнили пароль? <Link to="/login" className={styles.link}>Войти</Link>
      </p>
    </div>
  );
}

export default ResetPassword;
