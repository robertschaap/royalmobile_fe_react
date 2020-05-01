import styled from 'styled-components';

export const LoaderBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export const LoaderElement = styled.div`
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.color.blue};
    border-color: ${({ theme }) => theme.color.blue} transparent ${({ theme }) => theme.color.blue} transparent;
    animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
