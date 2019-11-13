import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
`;

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <ButtonBase>
      {children}
    </ButtonBase>
  );
};

export default Button;
