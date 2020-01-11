import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

import Toggle from './Toggle';

const ToggleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    flex-wrap: unset;
  }
`;

const ToggleDescription = styled.span`
  flex: 0 0 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    flex: auto;
    margin-bottom: unset;
    margin-right: ${({ theme }) => theme.spacing(4)};
  }

  ${media_breakpoint_up.lg} {
    flex: 0 0 50%;

  }
`;

const ToggleLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

const PaymentBase = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
`;

const PaymentAdjustmentAmount = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  font-weight: 700;

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;

const PaymentAdjustmentDescription = styled.div`
  flex: auto;
  margin: 0 ${({ theme }) => theme.spacing(2)};

  ${media_breakpoint_up.sm} {
    font-size: 16px;
    margin: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

const AdjustedPaymentAmount = styled(PaymentAdjustmentAmount)`
  background-color: unset;
`;

const PaymentSelector: React.FC = () => {
  return (
    <>
      <ToggleWrapper>
        <ToggleDescription>
          Your phone is x up front. Do you want to raise your plan's monthly fee a bit so you can spread it out?
          </ToggleDescription>
        <Toggle isActive />
        <ToggleLabel>Yes!</ToggleLabel>
      </ToggleWrapper>

      <PaymentBase>
        <PaymentAdjustmentAmount>50,-</PaymentAdjustmentAmount>
        <PaymentAdjustmentDescription>per month, your new up front is</PaymentAdjustmentDescription>
        <AdjustedPaymentAmount>50,-</AdjustedPaymentAmount>
      </PaymentBase>
    </>
  );
};

export default PaymentSelector;
