import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const DurationListingBase = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    display: flex;
  }
`;

interface DurationListingItemProps {
  isSelected: boolean;
}

export const DurationListingItem = styled.button<DurationListingItemProps>`
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

  &:hover {
    cursor: pointer;
  }

  ${media_breakpoint_up.md} {
    width: unset;
    margin-right: ${({ theme }) => theme.spacing(2)};

    :first-of-type {
      margin-bottom: unset;
    }
  }
`;
