import React from 'react';
import * as S from './toggle.styles';

interface ToggleProps {
  isActive: boolean;
  onChange(): void;
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const { isActive, onChange } = props;

  return (
    <S.ToggleBase data-testid="toggle">
      <S.ToggleInput
        data-testid="toggle-input"
        defaultChecked={isActive}
        onChange={onChange} />
      <S.ToggleSlider />
    </S.ToggleBase>
  );
};

export default Toggle;
