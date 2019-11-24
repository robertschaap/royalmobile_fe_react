import React from 'react';
import styled from 'styled-components';
import { useContentCopy } from '../hooks';

const ErrorMessageBase = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
`;

const Frown = styled.span`
  font-size: 32px;
  font-weight: 700;
  margin-right: ${({ theme }) => theme.spacing(4)}
`;

interface ErrorMessageProps {
  messageId: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { messageId } = props;

  return (
    <ErrorMessageBase>
      <Frown>:(</Frown>
      {useContentCopy(messageId)}
    </ErrorMessageBase>
  );
};

export default ErrorMessage;
