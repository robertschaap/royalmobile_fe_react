import React from 'react';
import styled from 'styled-components';

const OrderSummaryTextBase = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const OrderSummaryText: React.FC = () => {
  const device = 'iPhone X 16gb Lime';
  const plan = '10gb data bundle';
  const monthlyAmountGross = '20,00';
  const monthlyAmountNet = '19,00';
  const monthlyDiscount = '1,00';
  const oneTimeCost = '265,00';

  return (
    <OrderSummaryTextBase>
      <p>
        This is the summary of your order. You’re ordering the {device} with our {plan} for {monthlyAmountGross} per month.
      </p>
      <p>
        On top of this you get a {monthlyDiscount} discount so your total monthly payment is {monthlyAmountNet}.
      </p>
      <p>
        Your one-time up front cost is {oneTimeCost} for the phone. Youv’e been discounted for the connection fee. You’ve also been discounted for the shipping fee.
      </p>
      <p>
        Your total one-time payment is {oneTimeCost}.
      </p>
      <p>
        No funny business.<br />
        No sudden price hikes after a few months.<br />
        That’s it.
      </p>
    </OrderSummaryTextBase>
  );
};

export default OrderSummaryText;
