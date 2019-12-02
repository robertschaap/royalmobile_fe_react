import React from 'react';
import styled from 'styled-components';

const StarFilled = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const StarHollow = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;

const DeviceRating: React.FC = () => {
  return (
    <div>
      <StarFilled>{'★'.repeat(4)}</StarFilled>
      <StarHollow>{'☆'.repeat(1)}</StarHollow>
      {` ${34} Reviews`}
    </div>
  );
};

export default DeviceRating;
