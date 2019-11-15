import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';


const BreadcrumbsBase = styled.div`
  display: none;

  @media ${breakpoint_up.md} {
    display: unset;
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

const Breadcrumbs: React.FC = () => {
  return (
    <BreadcrumbsBase>Home |</BreadcrumbsBase>
  );
};

export default Breadcrumbs;
