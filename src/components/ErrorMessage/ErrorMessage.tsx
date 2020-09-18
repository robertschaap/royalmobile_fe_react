import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './error-message.styles';

interface ErrorMessageProps {
  messageId: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { messageId, className } = props;

  return (
    <S.ErrorMessageBase data-testid="error-message" className={className}>
      <S.Frown>:(</S.Frown>
      {ContentUtil(messageId)}
    </S.ErrorMessageBase>
  );
};

export default ErrorMessage;
