import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

const DeviceRatingBase = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const StarFilled = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const StarHollow = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;

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
    <DeviceRatingBase>
      <StarFilled>{'★'.repeat(ratingGiven)}</StarFilled>
      <StarHollow>{'☆'.repeat(ratingMax - ratingGiven)}</StarHollow>
      {` ${reviewCount} Reviews`}
    </DeviceRatingBase>
  );
};

export default DeviceRating;
