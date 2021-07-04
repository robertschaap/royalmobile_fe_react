import styled from 'styled-components';

import ErrorMessage from '../../../components/ErrorMessage';
import { GridItem } from '../../../components/Grid';

export const Section = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

export const FormError = styled(ErrorMessage)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
