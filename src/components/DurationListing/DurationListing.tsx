import React from 'react';
import * as S from './duration-listing.styles';

import ContentCopy from '../ContentCopy';

const content: { readonly [key: string]: string } = {
  '1_year': 'subscription.duration.1year',
  '2_year': 'subscription.duration.2year',
};

interface DurationListingProps {
  onClickDuration(durationId: string): void;
  selectedDurationId: string;
  durations: string[];
}

const DurationListing: React.FC<DurationListingProps> = (props) => {
  const { onClickDuration, selectedDurationId, durations } = props;

  return (
    <S.DurationListingBase
      data-testid="duration-listing">
      {durations.map((durationId, id) => (
        <S.DurationListingItem
          key={id}
          onClick={() => onClickDuration(durationId)}
          data-testprop-is-selected={durationId === selectedDurationId}
          isSelected={durationId === selectedDurationId}>
          <ContentCopy messageId={content[durationId]} />
        </S.DurationListingItem>
      ))}
    </S.DurationListingBase>
  );
};

export default React.memo(DurationListing);
