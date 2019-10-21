import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;

  return (
    <main>{children}</main>
  );
};

export default Main;
