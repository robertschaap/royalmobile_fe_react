import React from 'react';
import * as S from './button.styles';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?(): void;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props;

  if (variant === 'primary') {
    return (
      <S.ButtonPrimary
        data-testid="button-primary"
        {...rest} />
    );
  }

  return (
    <S.ButtonSecondary
      data-testid="button-secondary"
      {...rest} />
  );
};

export default Button;
