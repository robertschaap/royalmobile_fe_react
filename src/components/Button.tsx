import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)} 0;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

const ButtonPrimary = styled(ButtonBase)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
`;

const ButtonSecondary = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

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
      <ButtonPrimary
        data-testid="button-primary"
        {...rest} />
    );
  }

  return (
    <ButtonSecondary
      data-testid="button-secondary"
      {...rest} />
  );
};

export default Button;
