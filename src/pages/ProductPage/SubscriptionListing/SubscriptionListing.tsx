import React from 'react';
import * as S from './subscription-listing.styles';
import { Subscription } from '../../../types/subscriptions';
import StringUtil from '../../../utils/StringUtil';

import { GridBase, GridItem } from '../../../components/Grid';
import ContentCopy from '../../../components/ContentCopy';

interface SubscriptionListingProps {
  onClickSubscription(subscriptionId: string): void;
  selectedSubscriptionId: string;
  subscriptions: Subscription[];
}

const SubscriptionListing: React.FC<SubscriptionListingProps> = (props) => {
  const {
    onClickSubscription,
    selectedSubscriptionId,
    subscriptions,
  } = props;

  return (
    <GridBase
      data-testid="subscription-listing">
      {subscriptions.map(({ benefits_long, benefits_short, data, regular_price, subscriptionId }) => (
        <GridItem
          key={subscriptionId}
          lg={2}>
          <S.SubscriptionListingItem
            data-testid="subscription-listing-item"
            data-testprop-is-selected={subscriptionId === selectedSubscriptionId}
            onClick={() => onClickSubscription(subscriptionId)}
            isSelected={subscriptionId === selectedSubscriptionId}>
            <div>
              <div><ContentCopy messageId="product.data" /></div>
              <S.Bold>{data}</S.Bold>
            </div>
            <S.BenefitsSmall>{benefits_short}</S.BenefitsSmall>
            <S.BenefitsMedium>
              {benefits_long.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </S.BenefitsMedium>
            <div>
              <div><ContentCopy messageId="product.monthly" /></div>
              <S.Bold>{StringUtil.formatRoundedPrice(regular_price)}</S.Bold>
            </div>
          </S.SubscriptionListingItem>
        </GridItem>
      ))}
    </GridBase>
  );
};

export default SubscriptionListing;
