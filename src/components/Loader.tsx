import React from 'react';
import styled from 'styled-components';

const LoaderBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

const LoaderElement = styled.div`
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid royalblue;
    border-color: royalblue transparent royalblue transparent;
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

interface LoaderProps {
  show: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <LoaderBase>
      <LoaderElement data-testid="loader" />
    </LoaderBase>
  );
};

export default Loader;
