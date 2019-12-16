import React from 'react';
import styled from 'styled-components';

const OrderSummaryTextBase = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const OrderSummaryText: React.FC = () => {
  return (
    <OrderSummaryTextBase>
      <p>
        This is the summary of your order. You’re ordering the iPhone X 16gb Lime with our 10gb data bundle for 20,00 per month.
      </p>
      <p>
        On top of this you get a 1,00 discount so your total monthly payment is 19,00.
      </p>
      <p>
        Your one-time up front cost is 265,00 for the phone. Youv’e been discounted for the connection fee. You’ve also been discounted for the shipping fee.
      </p>
      <p>
        Your total one-time payment is 265,00.
      </p>

      <p>
        No funny business.
      </p>
      <p>
        No sudden price hikes after a few months.
      </p>
      <p>
        That’s it.
      </p>
    </OrderSummaryTextBase>
  );
};

export default OrderSummaryText;
