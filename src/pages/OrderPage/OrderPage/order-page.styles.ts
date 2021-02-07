import styled from 'styled-components';

import Button from '../../../components/Button';
import { media_breakpoint_up } from '../../../styles/theme';

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CartItemTotal = styled.div`
  flex: 0 0 100%;

  ${media_breakpoint_up.md} {
    margin-left: auto;
    flex: 0 0 30%;
  }
`;

export const CartItemTotalType = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemRemove = styled.div`
  font-size: 12px;
  text-align: right;
  flex: 0 0 100%;
`;

export const CartItemRemoveButton = styled.button`
  border: none;
`;

export const DeviceImage = styled.div`
  width: 50px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

export const DeviceName = styled.div`
  font-weight: 700;
`;

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
