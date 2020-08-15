import React from 'react';

import * as S from './loader.styles';

interface LoaderProps {
  show: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <S.LoaderBase>
      <S.LoaderElement data-testid="loader" />
    </S.LoaderBase>
  );
};

export default Loader;
