import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUserInfoThunk } from "../../services/actions/auth/thunks";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile-form.module.css";

const ProfileForm = () => {
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formFields = {
    name: nameRef,
    email: emailRef,
    password: passwordRef,
  };

  const { data } = useSelector((store) => store.user);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [field, setField] = useState({
    name: "",
    value: "",
    ref: null,
  });

  useEffect(() => {
    if (data) {
      const { name, email } = data;
      setState((prev) => ({ ...prev, name, email }));
    }
  }, [data]);

  const handleIconClick = (e) => {
    const currentElName = e.currentTarget.previousElementSibling.name;
    const currentElValue =
      currentElName !== "password"
        ? e.currentTarget.previousElementSibling.value
        : "";
    const currentElRef = formFields[currentElName];

    currentElRef.current.disabled = false;
    currentElRef.current.focus();

    setField({
      name: currentElName,
      value: currentElValue,
      ref: currentElRef,
    });
  };

  const handleCancelClick = () => {
    setField({
      name: "",
      value: "",
      ref: null,
    });
  };

  const handleChange = (e) => {
    setField((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, value } = field;

    dispatch(updateUserInfoThunk({[name]: value }));
    handleCancelClick();
  };

  return (
    <form onSubmit={handleSubmit} className={"mt-30 " + styles.form}>
      <div className={"mb-6 " + styles.input}>
        <Input
          ref={nameRef}
          type={"text"}
          placeholder={"Имя"}
          icon={field.name === "name" ? "CloseIcon" : "EditIcon"}
          onChange={handleChange}
          onIconClick={
            field.name === "name" ? handleCancelClick : handleIconClick
          }
          value={field.name === "name" ? field.value : state.name}
          error={false}
          errorText={"Ошибка"}
          name={"name"}
          disabled={field.name === "name" ? false : true}
        />
      </div>
      <div className={"mb-6 " + styles.input}>
        <Input
          ref={emailRef}
          type={"email"}
          placeholder={"Логин"}
          icon={field.name === "email" ? "CloseIcon" : "EditIcon"}
          onChange={handleChange}
          onIconClick={
            field.name === "email" ? handleCancelClick : handleIconClick
          }
          value={field.name === "email" ? field.value : state.email}
          error={false}
          errorText={"Ошибка"}
          name={"email"}
          disabled={field.name === "email" ? false : true}
        />
      </div>
      <div className={"mb-6 " + styles.input}>
        <Input
          ref={passwordRef}
          type={"password"}
          placeholder={"Пароль"}
          icon={field.name === "password" ? "CloseIcon" : "EditIcon"}
          onChange={handleChange}
          onIconClick={
            field.name === "password" ? handleCancelClick : handleIconClick
          }
          value={field.name === "password" ? field.value : "password"}
          error={false}
          errorText={"Ошибка"}
          name={"password"}
          disabled={field.name === "password" ? false : true}
        />
      </div>
      <fieldset
        className={
          styles.formControls +
          " " +
          (field.name.length > 0 ? styles.showForm : "")
        }
      >
        <input
          type="button"
          value="Отмена"
          className={"text text_type_main-default " + styles.cancelButton}
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
