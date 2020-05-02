import React from 'react';
import * as S from './skip-navigation-button.styles';

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
    <S.SkipNavigationButtonBase
      variant="secondary"
      onClick={onClick}>
      Skip navigation
    </S.SkipNavigationButtonBase>
  );
};

export default SkipNavigationButton;
