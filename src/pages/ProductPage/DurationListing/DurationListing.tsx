import React from 'react';

import { ContentUtil } from '../../../utils/ContentUtil';

import * as S from './duration-listing.styles';

const content: { readonly [key: string]: string } = {
  '1year': 'subscription.duration.1year',
  '2year': 'subscription.duration.2year',
};

interface DurationListingProps {
  onClickDuration(durationId: string): void;
  selectedDurationId: string;
  durations: string[];
}

const DurationListing: React.FC<DurationListingProps> = React.memo((props) => {
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
          {ContentUtil(content[durationId])}
        </S.DurationListingItem>
      ))}
    </S.DurationListingBase>
  );
});

export default DurationListing;
