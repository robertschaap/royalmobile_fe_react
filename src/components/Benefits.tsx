import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

import { GridBase, GridItem } from '../components/Grid';

const BenefitsItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${({ theme })=> theme.spacing(3)} ${({ theme })=> theme.spacing(4)};
  border: 1px solid ${({ theme })=> theme.color.grey};
  border-radius: 8px;

  @media ${breakpoint_up.md} {
    padding: ${({ theme })=> theme.spacing(6)} ${({ theme })=> theme.spacing(8)};
  }
`;

const BenefitsItemCallout = styled.span`
  flex: none;
  margin-right: ${({ theme })=> theme.spacing(4)};
  color: ${({ theme }) => theme.color.primary};
  font-size: 50px;
  font-weight: 700;

  @media ${breakpoint_up.md} {
    margin-right: ${({ theme })=> theme.spacing(6)};
  }
`;

const BenefitsItemDescription = styled.span`
  font-size: 12px;

  @media ${breakpoint_up.sm} {
    font-size: unset;
  }
`;

const Benefits: React.FC = () => {
  return (
    <GridBase as="section">
      <GridItem
        md={2}
        lg={2}>
        <BenefitsItem>
          <BenefitsItemCallout>GET</BenefitsItemCallout>
          <BenefitsItemDescription>
            Three months free inside of your regular bundle when you refer a friend
          </BenefitsItemDescription>
        </BenefitsItem>
      </GridItem>
      <GridItem
        md={2}
        lg={2}>
        <BenefitsItem>
          <BenefitsItemCallout>GET</BenefitsItemCallout>
          <BenefitsItemDescription>
            Double data in your bundle plus a 5 euro discount when you combine with <b>Royal</b>Internet
          </BenefitsItemDescription>
        </BenefitsItem>
      </GridItem>
  </GridBase>
  );
};

export default Benefits;
