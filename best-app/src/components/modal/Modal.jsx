import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ButtonRegistration } from '../ButtonRegistration/ButtonRegistration';
import { ModalContent, Modal, Entrance, Login, Password, Remember, BlockOfRegistation, SingRemember, BlockOfRemember, ErrorMessage } from './Modal.styles';

const ModalWindow = ({ onClick }) => {
  const disableModalClosing = (e) => e.stopPropagation();

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [loginIsEmpty, setLoginIsEmpty] = useState(false)
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(false)

  const [loginError, setLoginError] = useState('Логин не существует!');
  const [passwordError, setPasswordError] = useState('Введите пароль')


  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginIsEmpty(true)
        break
      case 'password':
        setPasswordError(true)
        break
    }
  };

  const loginHandler = (e) => {
    setLogin(e.target.value)
    const re = '';
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError('Логин не существует!')
    } else {
      setLoginError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
      if (!e.target.value) {
        setPasswordError('Введите пароль')
      }
    } else {
      setPasswordError('')
    }
  }

  return ReactDOM.createPortal(
    <Modal onClick={onClick}>
      <ModalContent onClick={disableModalClosing}>
        <Entrance>Вход</Entrance>
        <BlockOfRegistation>
          {(loginIsEmpty && loginError) && <ErrorMessage>{loginError}</ErrorMessage>}
          <Login onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name='login' type="text" placeholder="Логин" />
          {(passwordIsEmpty && passwordError) && <ErrorMessage>{passwordError}</ErrorMessage>}
          <Password onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Пароль" />
          <BlockOfRemember>
            <Remember type="checkbox" id="remember" />
            <SingRemember for="remember">Запомнить</SingRemember>
          </BlockOfRemember>
        </BlockOfRegistation>
        <ButtonRegistration />
      </ModalContent>
    </Modal>,
    document.getElementById('modal-root')
  )
};

export default ModalWindow;