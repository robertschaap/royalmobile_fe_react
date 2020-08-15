import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';
import Link from '../Link';

export const BannerBase = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
  height: 96px;

  background: rgb(255,142,0);
  background: linear-gradient(
    163deg,
    ${({ theme }) => theme.color.primary} 0%,
    ${({ theme }) => theme.color.secondary} 120%
  );

  ${media_breakpoint_up.md} {
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(8)};
    height: 200px;
  }
`;

export const BannerLeft = styled.span`
  font-size: 32px;
  font-weight: 700;
  text-align: right;

  ${media_breakpoint_up.md} {
    text-align: unset;
    font-size: 40px;
  }
`;

export const BannerRight = styled.span`
  font-size: 111px;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgba(1,1,1,0.16);
  display: none;

  ${media_breakpoint_up.md} {
    display: unset;
  }
`;
