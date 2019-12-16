import React from 'react';
import styled from 'styled-components';

const DeviceRatingBase = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StarFilled = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const StarHollow = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;

const DeviceRating: React.FC = () => {
  return (
    <DeviceRatingBase>
      <StarFilled>{'★'.repeat(4)}</StarFilled>
      <StarHollow>{'☆'.repeat(1)}</StarHollow>
      {` ${34} Reviews`}
    </DeviceRatingBase>
  );
};

export default DeviceRating;
