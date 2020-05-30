import React from 'react';
import * as S from './order-summary-text.styles';

interface OrderSummaryTextProps {
  deviceCostOneTimePayment: string;
  deviceName: string;
  oneTimePaymentTotal: string;
  selectedSubscriptionData: string;
  selectedSubscriptionPrice: string;
}

const OrderSummaryText: React.FC<OrderSummaryTextProps> = (props) => {
  const {
    deviceCostOneTimePayment,
    deviceName,
    selectedSubscriptionData,
    selectedSubscriptionPrice,
  } = props;

  const plan = `${selectedSubscriptionData} data bundle`;
  const monthlyAmountGross = selectedSubscriptionPrice;
  const monthlyDiscount = '0,00';
  const monthlyAmountNet = selectedSubscriptionPrice;
  const oneTimeCost = deviceCostOneTimePayment;

  return (
    <S.OrderSummaryTextBase>
      <p>
        This is the summary of your order. You’re ordering the {deviceName} with our {plan} for {monthlyAmountGross} per month.
      </p>
      <p>
        On top of this you get a {monthlyDiscount} discount so your total monthly payment is {monthlyAmountNet}.
      </p>
      <p>
        Your one-time up front cost is {deviceCostOneTimePayment} for the phone. Youv’e been discounted for the connection fee. You’ve also been discounted for the shipping fee.
      </p>
      <p>
        Your total one-time payment is {oneTimeCost}.
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
