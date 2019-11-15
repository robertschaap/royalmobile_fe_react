import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 8px 8px 0 0;
  padding: ${({ theme }) => theme.spacing(4)};
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
