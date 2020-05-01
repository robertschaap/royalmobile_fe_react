import React from 'react';
import * as S from './footer.styles';
import { useContentCopy } from '../../hooks';
import routes from '../../constants/routes';

import Link from '../Link';

const Footer: React.FC = () => {
  return (
    <S.FooterBase>
      <Link to={routes.CONTACT_PAGE}>
        {useContentCopy('navigation.contact')}
      </Link>
      <div><b>{useContentCopy('common.royal')}</b>{useContentCopy('common.mobile')} 2020</div>
    </S.FooterBase>
  );
};

export default Footer;
