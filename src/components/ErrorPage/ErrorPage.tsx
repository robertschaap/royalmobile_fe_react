import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';
import ErrorMessage from '../ErrorMessage';

import * as S from './error-page.styles';

const ErrorPage: React.FC = () => {
  return (
    <>
      <S.Whoops>{ContentUtil('common.errorHeader')}</S.Whoops>
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ErrorPage;
