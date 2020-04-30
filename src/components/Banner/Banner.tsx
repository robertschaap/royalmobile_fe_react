import React from 'react';
import * as S from './banner.styles';
import routes from '../../constants/routes';
import formatRoute from '../../utils/formatRoute';

import PageSection from '../PageSection';

const Banner: React.FC = () => {
  return (
    <PageSection>
      <S.BannerBase
        data-testid="banner"
        to={formatRoute(routes.CAMPAIGNS_PAGE, { id: 1 })}>
        <S.BannerLeft>Fat Freaking<br />Discounts</S.BannerLeft>
        <S.BannerRight>SALE</S.BannerRight>
      </S.BannerBase>
    </PageSection>
  );
};

export default Banner;
