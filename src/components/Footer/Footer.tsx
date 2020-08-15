import React from 'react';

import routes from '../../constants/routes';
import { ContentUtil } from '../../utils/ContentUtil';
import Link from '../Link';

import * as S from './footer.styles';

const Footer: React.FC = () => {
  return (
    <S.FooterBase>
      <Link
        data-testid="footer-contact-link"
        to={routes.CONTACT_PAGE}>
        {ContentUtil('pages.contact')}
      </Link>
      <div><b>{ContentUtil('common.royal')}</b>{ContentUtil('common.mobile')} 2020</div>
    </S.FooterBase>
  );
};

export default Footer;
