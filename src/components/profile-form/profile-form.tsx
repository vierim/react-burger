import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { updateUserInfoThunk } from '../../services/actions/auth/thunks';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-form.module.css';

interface IProfileFormState {
  name: string;
  email: string;
  password: string;
}

interface IProfileFormFieldState {
  name: string;
  value: string;
  ref: React.RefObject<HTMLInputElement> | undefined;
}

const ProfileForm = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.user);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<IProfileFormState>({
    name: '',
    email: '',
    password: '',
  });

  const [field, setField] = useState<IProfileFormFieldState>({
    name: '',
    value: '',
    ref: undefined,
  });

  const formFields = {
    name: nameRef,
    email: emailRef,
    password: passwordRef,
  };

  useEffect(() => {
    if (data) {
      const { name, email } = data;
      setState((prev) => ({ ...prev, name, email }));
    }
  }, [data]);

  const handleIconClick = (selectedField: 'name' | 'email' | 'password') => {
    const currentElRef: React.RefObject<HTMLInputElement> = formFields[selectedField];

    if (currentElRef.current) {
      const value = selectedField !== 'password' ? state[selectedField] : '';

      currentElRef.current.disabled = false;
      currentElRef.current.focus();

      setField({
        name: selectedField,
        value: value,
        ref: currentElRef,
      });
    }
  };

  const handleCancelClick = () => {
    setField({
      name: '',
      value: '',
      ref: undefined,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, value } = field;

    dispatch(updateUserInfoThunk({ [name]: value }));
    handleCancelClick();
  };

  return (
    <form onSubmit={handleSubmit} className={'mt-30 ' + styles.form}>
      <div className={'mb-6 ' + styles.input}>
        <Input
          ref={nameRef}
          type={'text'}
          placeholder={'Имя'}
          icon={field.name === 'name' ? 'CloseIcon' : 'EditIcon'}
          onChange={handleChange}
          onIconClick={() =>
            field.name === 'name' ? handleCancelClick : handleIconClick('name')
          }
          value={field.name === 'name' ? field.value : state.name}
          error={false}
          errorText={'Ошибка'}
          name={'name'}
          disabled={field.name === 'name' ? false : true}
        />
      </div>
      <div className={'mb-6 ' + styles.input}>
        <Input
          ref={emailRef}
          type={'email'}
          placeholder={'Логин'}
          icon={field.name === 'email' ? 'CloseIcon' : 'EditIcon'}
          onChange={handleChange}
          onIconClick={() =>
            field.name === 'email'
              ? handleCancelClick
              : handleIconClick('email')
          }
          value={field.name === 'email' ? field.value : state.email}
          error={false}
          errorText={'Ошибка'}
          name={'email'}
          disabled={field.name === 'email' ? false : true}
        />
      </div>
      <div className={'mb-6 ' + styles.input}>
        <Input
          ref={passwordRef}
          type={'password'}
          placeholder={'Пароль'}
          icon={field.name === 'password' ? 'CloseIcon' : 'EditIcon'}
          onChange={handleChange}
          onIconClick={() =>
            field.name === 'password'
              ? handleCancelClick
              : handleIconClick('password')
          }
          value={field.name === 'password' ? field.value : 'password'}
          error={false}
          errorText={'Ошибка'}
          name={'password'}
          disabled={field.name === 'password' ? false : true}
        />
      </div>
      <fieldset
        className={
          styles.formControls +
          ' ' +
          (field.name.length > 0 ? styles.showForm : '')
        }
      >
        <input
          type="button"
          value="Отмена"
          className={'text text_type_main-default ' + styles.cancelButton}
          onClick={handleCancelClick}
        />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </fieldset>
    </form>
  );
};

export default ProfileForm;
