import styled from 'styled-components';

import Button from '../Button';

export const SkipNavigationButtonBase = styled(Button)`
  position: absolute;
  top: -100px;

  &:focus {
    position: relative;
    top: 0;
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;
