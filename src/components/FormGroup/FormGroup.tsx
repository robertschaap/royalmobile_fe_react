import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './form-group.styles';

interface FormGroupProps {
  children: React.ReactNode;
  error?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const {
    children,
    error,
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
      {!isValid && error && <S.Error>{ContentUtil(error)}</S.Error>}
    </S.FormGroupBase>
  );
};

export default FormGroup;
