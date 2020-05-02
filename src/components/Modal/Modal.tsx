import React from 'react';
import * as S from './modal.styles';

import Button from '../Button';

interface ModalProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, header } = props;

  return (
    <S.ModalWrapper>
      <S.ModalBase>
        <S.ModalHeader>
          {header}
        </S.ModalHeader>
        <S.ModalBody>
          {children}
        </S.ModalBody>
        <S.ModalFooter>
          <Button variant="primary">Close</Button>
        </S.ModalFooter>
      </S.ModalBase>
    </S.ModalWrapper>
  );
};

export default Modal;
