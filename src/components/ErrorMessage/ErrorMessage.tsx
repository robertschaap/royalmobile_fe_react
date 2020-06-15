import React from 'react';
import * as S from './error-message.styles';
import { useContentCopy } from '../../utils/useContentCopy';

interface ErrorMessageProps {
  messageId: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { messageId } = props;

  return (
    <S.ErrorMessageBase data-testid="error-message">
      <S.Frown>:(</S.Frown>
      {useContentCopy(messageId)}
    </S.ErrorMessageBase>
  );
};

export default ErrorMessage;
