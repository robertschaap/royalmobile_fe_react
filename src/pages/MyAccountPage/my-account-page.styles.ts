import styled from 'styled-components';

import { GridItem } from '../../components/Grid';

export const Section = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;
