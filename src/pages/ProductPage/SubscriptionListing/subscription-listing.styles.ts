import styled from 'styled-components';
import { media_breakpoint_up } from '../../../styles/theme';

interface SubscriptionListingItemProps {
  onClick(subscriptionId: string): void;
  isSelected: boolean;
}

export const SubscriptionListingItem = styled.button<SubscriptionListingItemProps>`
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

  &:hover {
    cursor: pointer;
  }
`;

export const Bold = styled.div`
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

export const BenefitsSmall = styled.div`
  margin: 0 ${({ theme }) => theme.spacing(4)};
  white-space: pre-wrap;

  &:first-letter {
    text-transform: capitalize;
  }

  ${media_breakpoint_up.sm} {
    display: none;
  }
`;

export const BenefitsMedium = styled.ul`
  margin: 0 ${({ theme }) => theme.spacing(4)};
  padding: 0;
  list-style-type: none;
  display: none;

  > li {
    text-transform: capitalize;
  }

  ${media_breakpoint_up.sm} {
    display: block;
  }
`;
