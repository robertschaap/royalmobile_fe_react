import React from 'react';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const Whoops = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  font-size: 32px;
`;

const ErrorPage: React.FC = () => {
  return (
    <>
      <Whoops>Whoops...</Whoops>
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ErrorPage;
