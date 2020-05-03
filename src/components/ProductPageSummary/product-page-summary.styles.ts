import styled, { css } from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

interface CardProps {
  marginBottom?: number;
}

export const Card = styled.div<CardProps>`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ marginBottom, theme }) => theme.spacing(marginBottom || 0)};
`;

export const SubTotalCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTotal = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;

export const SummaryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

interface SummaryListItemProps {
  isDiscount?: boolean;
}

export const SummaryListItem = styled.li<SummaryListItemProps>`
  display: flex;
  justify-content: space-between;

  ${({ isDiscount, theme }) => (isDiscount
    ? css` color: ${theme.color.primary};`
    : css``
  )}
`;
