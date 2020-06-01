import styled from 'styled-components';
import { media_breakpoint_up } from '../../../styles/theme';

import Button from '../../../components/Button';

export const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Total = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;

export const OrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
