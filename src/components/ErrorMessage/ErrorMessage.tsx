import React from 'react';
import * as S from './error-message.styles';
import { useContentCopy } from '../../hooks';

interface ErrorMessageProps {
  messageId: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { messageId } = props;

  return (
    <S.ErrorMessageBase>
      <S.Frown>:(</S.Frown>
      {useContentCopy(messageId)}
    </S.ErrorMessageBase>
  );
};

export default ErrorMessage;
