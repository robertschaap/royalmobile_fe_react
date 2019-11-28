import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';
import { useContentCopy } from '../hooks/useContentCopy';

const HeaderUspsBase = styled.ul`
  display: none;
  text-align: right;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding-left: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    display: block;
  }
`;

const Check = styled.span`
  font-family: 'Lucida Grande';
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const HeaderUsps: React.FC = () => {
  return (
    <HeaderUspsBase>
      <li><Check>✓ </Check>{useContentCopy('usp.noFalsePromises')}</li>
      <li><Check>✓ </Check>{useContentCopy('usp.noConnectionFeeAcquisition')}</li>
      <li><Check>✓ </Check>{useContentCopy('usp.freeShipping')}</li>
    </HeaderUspsBase>
  );
};

export default HeaderUsps;
