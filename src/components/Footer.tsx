import React from 'react';
import styled from 'styled-components';
import { useContentCopy } from '../hooks';
import routes from '../constants/routes';

import Link from '../components/Link';

const FooterBase = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 8px 8px 0 0;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <Link to={routes.CONTACT}>
        {useContentCopy("navigation.contact")}
      </Link>
      <div><b>Royal</b>Mobile 2019</div>
    </FooterBase>
  );
};

export default Footer;
