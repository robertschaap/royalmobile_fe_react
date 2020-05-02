import React from 'react';
import * as S from './header-usps.styles';
import { useContentCopy } from '../../hooks/useContentCopy';

const HeaderUsps: React.FC = () => {
  return (
    <S.HeaderUspsBase>
      <li><S.Check>✓ </S.Check>{useContentCopy('usp.noFalsePromises')}</li>
      <li><S.Check>✓ </S.Check>{useContentCopy('usp.noConnectionFeeAcquisition')}</li>
      <li><S.Check>✓ </S.Check>{useContentCopy('usp.freeShipping')}</li>
    </S.HeaderUspsBase>
  );
};

export default HeaderUsps;
