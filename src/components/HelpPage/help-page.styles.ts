import styled from 'styled-components';

import { GridItem } from '../Grid';

const Section = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;
