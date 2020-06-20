import React from 'react';
import * as S from './error-page.styles';

import ErrorMessage from '../ErrorMessage';
import { ContentUtil } from '../../utils/ContentUtil';

const ErrorPage: React.FC = () => {
  return (
    <>
      <S.Whoops>{ContentUtil('common.errorHeader')}</S.Whoops>
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ErrorPage;
