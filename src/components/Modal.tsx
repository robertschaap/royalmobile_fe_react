import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ModalWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(32)} ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`;

const ModalBase = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ModalBody = styled.div`
  flex: auto;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;

const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.grey};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

interface ModalProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, header } = props;

  return (
    <ModalWrapper>
      <ModalBase>
        <ModalHeader>
          {header}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button variant="primary">Close</Button>
        </ModalFooter>
      </ModalBase>
    </ModalWrapper>
  );
};

export default Modal;
