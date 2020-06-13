import React from 'react';
import * as S from './banner.styles';
import routes from '../../constants/routes';
import formatRoute from '../../utils/formatRoute';

import PageSection from '../PageSection';

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
