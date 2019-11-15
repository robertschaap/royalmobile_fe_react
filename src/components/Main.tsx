import React from 'react';
import styled from 'styled-components';

const MainBase = styled.main`
  flex: auto;
`;

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;

  return (
    <MainBase>
      {children}
    </MainBase>
  );
};

export default Main;
