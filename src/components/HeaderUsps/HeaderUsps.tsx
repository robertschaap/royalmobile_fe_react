import React from 'react';
import * as S from './header-usps.styles';
import { ContentUtil } from '../../utils/ContentUtil';

const HeaderUsps: React.FC = () => {
  return (
    <S.HeaderUspsBase>
      <li><S.Check>✓ </S.Check>{ContentUtil('usp.noFalsePromises')}</li>
      <li><S.Check>✓ </S.Check>{ContentUtil('usp.noConnectionFeeAcquisition')}</li>
      <li><S.Check>✓ </S.Check>{ContentUtil('usp.freeShipping')}</li>
    </S.HeaderUspsBase>
  );
};

export default HeaderUsps;
