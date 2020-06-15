import React from 'react';
import * as S from './footer.styles';
import { ContentUtil } from '../../utils/ContentUtil';
import routes from '../../constants/routes';

import Link from '../Link';

const Footer: React.FC = () => {
  return (
    <S.FooterBase>
      <Link to={routes.CONTACT_PAGE}>
        {ContentUtil('pages.contact')}
      </Link>
      <div><b>{ContentUtil('common.royal')}</b>{ContentUtil('common.mobile')} 2020</div>
    </S.FooterBase>
  );
};

export default Footer;
