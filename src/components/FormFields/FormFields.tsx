import React from 'react';
import * as S from './form-fields.styles';

import FormGroup from '../FormGroup';

interface InputProps {
  error: string;
  hasError: boolean;
  hint: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
  name: string;
  onChange(v: any): void;
  placeholder: string;
  value: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    error,
    hasError,
    hint,
    isRequired,
    isValid,
    label,
    name,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <FormGroup
      error={error}
      hasError={hasError}
      hint={hint}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.InputField
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </FormGroup>
  );
};
