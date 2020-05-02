import styled from 'styled-components';

export const ModalWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(32)} ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`;

export const ModalBase = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ModalBody = styled.div`
  flex: auto;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.grey};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;
