import React from 'react';

import * as S from './main.styles';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;

  return (
    <S.MainBase>
      {children}
    </S.MainBase>
  );
};

export default Main;
