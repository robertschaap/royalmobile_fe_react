import styled from 'styled-components';

import Button from '../../../components/Button';

export const FinaliseOrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Section = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;
