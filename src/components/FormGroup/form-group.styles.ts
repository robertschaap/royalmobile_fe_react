import styled from 'styled-components';

export const FormGroupBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const FormLabel = styled.label`
  display: flex;
  font-weight: 500;
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const Error = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
`;

export const Icon = styled.span<{ isValid?: boolean }>`
  display: inline-block;
  background-color: ${({ isValid }) => isValid ? 'lightgreen' : 'red'};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-left: auto;
`;
