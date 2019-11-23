import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

const DurationListingBase = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    display: flex;
  }
`;

interface DurationListingItemProps {
  isSelected: boolean;
}

const DurationListingItem = styled.button<DurationListingItemProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(4)};

  :first-of-type {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}

  ${media_breakpoint_up.md} {
    width: unset;
    margin-right: ${({ theme }) => theme.spacing(2)};

    :first-of-type {
      margin-bottom: unset;
    }
  }
`;

const DurationListing: React.FC = () => {
  return (
    <DurationListingBase>
      <DurationListingItem isSelected={true}>2 year contract</DurationListingItem>
      <DurationListingItem isSelected={false}>1 year contract</DurationListingItem>
    </DurationListingBase>
  );
};

export default DurationListing;
