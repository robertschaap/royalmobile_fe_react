import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background-color: ${({ theme }) => theme.color.blaat};
`;

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <div>Contact</div>
      <div>Corporate Bla Bla Bla</div>
    </FooterBase>
  );
};

export default Footer;
