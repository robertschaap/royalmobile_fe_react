import React from 'react';
import * as S from './error-message.styles';
import { ContentUtil } from '../../utils/ContentUtil';

interface ErrorMessageProps {
  messageId: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { messageId } = props;

  return (
    <S.ErrorMessageBase data-testid="error-message">
      <S.Frown>:(</S.Frown>
      {ContentUtil(messageId)}
    </S.ErrorMessageBase>
  );
};

export default ErrorMessage;
