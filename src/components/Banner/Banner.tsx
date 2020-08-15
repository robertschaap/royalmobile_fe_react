import React from 'react';

import routes from '../../constants/routes';
import formatRoute from '../../utils/formatRoute';
import PageSection from '../PageSection';

import * as S from './banner.styles';

interface BannerProps {
  id?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const { id = '1' } = props;

  return (
    <PageSection>
      <S.BannerBase
        data-testid="banner"
        to={formatRoute(routes.CAMPAIGNS_PAGE, { id })}>
        <S.BannerLeft>Fat Freaking<br />Discounts</S.BannerLeft>
        <S.BannerRight>SALE</S.BannerRight>
      </S.BannerBase>
    </PageSection>
  );
};

export default Banner;
