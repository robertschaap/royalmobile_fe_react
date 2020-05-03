import styled from 'styled-components';

export const InputField = styled.input`
  border: unset;
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
  outline: none;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;
