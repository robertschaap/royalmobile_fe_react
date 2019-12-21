import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

import { GridBase, GridItem } from './Grid';

const subscriptions = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const SubscriptionListingBase = styled(GridBase)`
  margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
`;

interface SubscriptionListingItemProps {
  isSelected: boolean;
}

const SubscriptionListingItem = styled.button<SubscriptionListingItemProps>`
  display: flex;
  justify-content: space-between
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};

  ${media_breakpoint_up.sm} {
    font-size: 24px;
  }

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;

const BenefitsSmall = styled.div`
  margin: 0 ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.sm} {
    display: none;
  }
`;

const BenefitsMedium = styled.ul`
  margin: 0 ${({ theme }) => theme.spacing(4)};
  padding: 0;
  list-style-type: none;
  display: none;

  ${media_breakpoint_up.sm} {
    display: block;
  }
`;

const SubscriptionListing: React.FC = () => {
  return (
    <SubscriptionListingBase>
      {subscriptions.map((subscription, index) => (
        <GridItem
          key={index}
          lg={2}>
          <SubscriptionListingItem
            isSelected={index === 0}>
            <div>
              <div>Data</div>
              <Bold>10gb</Bold>
            </div>
            <BenefitsSmall>Unlimited<br/>calls, texts, roaming</BenefitsSmall>
            <BenefitsMedium>
              {['Unlimited calls', 'Unlimited texts', 'Unlimited roaming'].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </BenefitsMedium>
            <div>
              <div>Monthly</div>
              <Bold>20,-</Bold>
            </div>
          </SubscriptionListingItem>
        </GridItem>
      ))}
    </SubscriptionListingBase>
  );
};

export default SubscriptionListing;
