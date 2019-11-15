import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)} 0;
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
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props;

  if (variant === "primary") {
    return (
      <ButtonPrimary {...rest} />
    );
  }

  return (
    <ButtonSecondary {...rest} />
  )
};

export default Button;
