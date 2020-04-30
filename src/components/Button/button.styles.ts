import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)} 0;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
`;

export const ButtonSecondary = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
