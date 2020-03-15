import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

import ContentCopy from './ContentCopy';

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

const content: { readonly [key: string]: string } = {
  '1_year': 'subscription.duration.1year',
  '2_year': 'subscription.duration.2year',
}

interface DurationListingProps {
  onClickDuration(durationId: string): void;
  selectedDurationId: string;
  durations: string[];
}

const DurationListing: React.FC<DurationListingProps> = (props) => {
  const { onClickDuration, selectedDurationId, durations } = props;

  return (
    <DurationListingBase
      data-testid="duration-listing">
      {durations.map((durationId, id) => (
        <DurationListingItem
          key={id}
          onClick={() => onClickDuration(durationId)}
          data-testprop-is-selected={durationId === selectedDurationId}
          isSelected={durationId === selectedDurationId}>
          <ContentCopy messageId={content[durationId]} />
        </DurationListingItem>
      ))}
    </DurationListingBase>
  );
};

export default React.memo(DurationListing);
