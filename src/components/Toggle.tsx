import React from 'react';
import styled from 'styled-components';

const ToggleBase = styled.label`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.grey};
  transition: background-color .2s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: transform .2s;
    border-radius: 50%;
  }
`;

const ToggleInput = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${ToggleSlider}:before {
    transform: translateX(29px);
  }

  :checked + ${ToggleSlider} {
    background-color: ${({ theme }) => theme.color.primary};
  }

  :focus + ${ToggleSlider} {
    transition: 0;
    box-shadow: 0 0 0 3px royalblue;
  }
`;

interface ToggleProps {
  isActive: boolean;
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const { isActive } = props;

  return (
    <ToggleBase>
      <ToggleInput
        data-testid="toggle-input"
        checked={isActive} />
      <ToggleSlider />
    </ToggleBase>
  );
};

export default Toggle;
