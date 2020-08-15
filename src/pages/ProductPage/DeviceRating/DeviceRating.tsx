import React from 'react';

import * as S from './device-rating.styles';

//  TODO: make required once data is passed
interface DeviceRatingProps {
  ratingMax?: number;
  ratingGiven?: number;
  reviewCount?: number;
}

const DeviceRating: React.FC<DeviceRatingProps> = (props) => {
  const {
    ratingMax = 5,
    ratingGiven = 4,
    reviewCount = 34,
  } = props;

  return (
    <S.DeviceRatingBase>
      <S.StarFilled>{'★'.repeat(ratingGiven)}</S.StarFilled>
      <S.StarHollow>{'☆'.repeat(ratingMax - ratingGiven)}</S.StarHollow>
      {` ${reviewCount} Reviews`}
    </S.DeviceRatingBase>
  );
};

export default DeviceRating;
