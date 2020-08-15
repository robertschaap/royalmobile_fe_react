import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './header-usps.styles';

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
