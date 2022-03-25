import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonRegistration } from '../ButtonRegistration/ButtonRegistration';
import { ModalContent, Modal, Entrance, Login, Password, Remember, BlockOfRegistation, SingRemember, BlockOfRemember } from './Modal.styles';

const ModalWindow = ({ onClick }) => {
  const disableModalClosing = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    <Modal onClick={onClick}>
      <ModalContent onClick={disableModalClosing}>
        <Entrance>Вход</Entrance>
        <BlockOfRegistation>
          <Login type="text" placeholder="Логин" />
          <Password type="password" placeholder="Пароль" />
          <BlockOfRemember>
            <Remember type="checkbox" />
            <SingRemember>Запомнить</SingRemember>
          </BlockOfRemember>
        </BlockOfRegistation>
        <ButtonRegistration />
      </ModalContent>
    </Modal>,
    document.getElementById('modal-root')
  )
};

export default ModalWindow;