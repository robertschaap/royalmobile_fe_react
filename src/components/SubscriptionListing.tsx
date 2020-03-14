import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';
import { Subscription } from '../types/subscriptions';

import { GridBase, GridItem } from './Grid';

interface SubscriptionListingItemProps {
  onClick(subscriptionId: string): void;
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

interface SubscriptionListingProps {
  onClickSubscription(subscriptionId: string): void;
  selectedSubscriptionId: string;
  subscriptions: Subscription[];
}

// TODO: capitalise text
const SubscriptionListing: React.FC<SubscriptionListingProps> = (props) => {
  const { onClickSubscription, selectedSubscriptionId, subscriptions } = props;

  return (
    <GridBase
      data-testid="subscription-listing">
      {subscriptions.map(({ benefits_long, benefits_short, data, regular_price, subscriptionId }) => (
        <GridItem
          key={subscriptionId}
          lg={2}>
          <SubscriptionListingItem
            data-testid="subscription-listing-item"
            data-testprop-is-selected={subscriptionId === selectedSubscriptionId}
            onClick={() => onClickSubscription(subscriptionId)}
            isSelected={subscriptionId === selectedSubscriptionId}>
            <div>
              <div>Data</div>
              <Bold>{data}</Bold>
            </div>
            <BenefitsSmall>{benefits_short}</BenefitsSmall>
            <BenefitsMedium>
              {benefits_long.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </BenefitsMedium>
            <div>
              <div>Monthly</div>
              <Bold>{regular_price},-</Bold>
            </div>
          </SubscriptionListingItem>
        </GridItem>
      ))}
    </GridBase>
  );
};

export default SubscriptionListing;
