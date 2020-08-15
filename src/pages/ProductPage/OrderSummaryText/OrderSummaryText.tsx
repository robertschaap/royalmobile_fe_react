import React from 'react';

import { OrderSummary } from '../../../hooks';

import * as S from './order-summary-text.styles';

interface OrderSummaryTextProps {
  deviceName: string;
  orderSummary: OrderSummary;
}

const OrderSummaryText: React.FC<OrderSummaryTextProps> = (props) => {
  const {
    deviceName,
    orderSummary,
  } = props;

  const plan = `${orderSummary.selectedSubscription.data} data bundle`;

  return (
    <S.OrderSummaryTextBase>
      <p>
        This is the summary of your order. You’re ordering the {deviceName} with our {plan} for {orderSummary.monthlySubscriptionCost} per month.
      </p>
      <p>
        On top of this you get a {orderSummary.monthlyDiscountTotal} discount so your total monthly payment is {orderSummary.monthlyPaymentTotal}.
      </p>
      <p>
        Your one-time up front cost is {orderSummary.oneTimeDeviceCost} for the phone. You’ve been discounted for the connection fee. You’ve also been discounted for the shipping fee.
      </p>
      <p>
        Your total one-time payment is {orderSummary.oneTimePaymentTotal}.
      </p>
      <p>
        No funny business.<br />
        No sudden price hikes after a few months.<br />
        That’s it.
      </p>
    </S.OrderSummaryTextBase>
  );
};

export default OrderSummaryText;
