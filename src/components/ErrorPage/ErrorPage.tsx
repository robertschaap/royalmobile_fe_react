import React from 'react';
import * as S from './error-page.styles';

import ErrorMessage from '../ErrorMessage';

const ErrorPage: React.FC = () => {
  return (
    <>
      <S.Whoops>Whoops...</S.Whoops>
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ErrorPage;
