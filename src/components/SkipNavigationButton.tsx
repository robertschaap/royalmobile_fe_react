import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const SkipNavigationButtonBase = styled(Button)`
  position: absolute;
  top: -100px;

  &:focus {
    position: relative;
    top: 0;
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;

const SkipNavigationButton: React.FC = () => {
  const onClick = () => {
    const mainElement = document.querySelector('main');

    const focusableElementSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      '[tabindex="0"]',
    ].join(', ');

    if (mainElement) {
      const focusableElements = mainElement.querySelectorAll<HTMLElement>(focusableElementSelectors);
      focusableElements[0].focus();
    }
  };

  return (
    <SkipNavigationButtonBase
      variant="secondary"
      onClick={onClick}>
      Skip navigation
    </SkipNavigationButtonBase>
  );
};

export default SkipNavigationButton;
