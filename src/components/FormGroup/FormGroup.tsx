import React from 'react';
import * as S from './form-group.styles';

interface FormGroupProps {
  children: React.ReactNode;
  error: string;
  hasError: boolean;
  hint?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const {
    children,
    error,
    hasError,
    hint,
    isRequired,
    isValid,
    label,
  } = props;

  return (
    <S.FormGroupBase>
      <S.FormLabel>
        {label}
        {isRequired && ' * '}
        {hasError && <S.Icon />}
        {isValid && <S.Icon isValid />}
      </S.FormLabel>
      {children}
      {hasError ? <S.Error>{error}</S.Error> : <S.Hint>{hint}&nbsp;</S.Hint>}
    </S.FormGroupBase>
  );
};

export default FormGroup;
