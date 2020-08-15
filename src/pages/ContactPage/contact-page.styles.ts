import styled from 'styled-components';

import ExternalLink from '../../components/ExternalLink';
import { GridItem } from '../../components/Grid';

export const ContactInfo = styled(GridItem)`
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const SocialIcons = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const SocialIcon = styled(ExternalLink)`
  width: 32px;
  height: 32px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.spacing(2)};
  display: flex;

  > svg {
    width: 100%;
  }
`;
