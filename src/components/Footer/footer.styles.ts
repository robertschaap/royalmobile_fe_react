import styled from 'styled-components';

export const FooterBase = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 8px 8px 0 0;
  padding: ${({ theme }) => theme.spacing(4)};
`;
