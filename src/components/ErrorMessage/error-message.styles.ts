import styled from 'styled-components';

export const ErrorMessageBase = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
`;

export const Frown = styled.span`
  font-size: 32px;
  font-weight: 700;
  margin-right: ${({ theme }) => theme.spacing(4)};
  white-space: nowrap;
`;
