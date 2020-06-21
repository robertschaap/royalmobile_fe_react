import React from 'react';
import * as S from './form-group.styles';

import { ContentUtil } from '../../utils/ContentUtil';

interface FormGroupProps {
  children: React.ReactNode;
  error?: string;
  hint?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const {
    children,
    error,
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
        {isValid ? <S.Icon isValid /> : <S.Icon />}
      </S.FormLabel>
      {children}
      {isValid && <S.Hint>{hint}&nbsp;</S.Hint>}
      {!isValid && error && <S.Error>{ContentUtil(error)}</S.Error>}
    </S.FormGroupBase>
  );
};

export default FormGroup;
