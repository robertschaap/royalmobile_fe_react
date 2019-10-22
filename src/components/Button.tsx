import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <button>{children}</button>
  );
};

export default Button;
