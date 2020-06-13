import React from 'react';
import * as S from './form-fields.styles';

import FormGroup from '../FormGroup';

interface FormFieldProps {
  error: string;
  hasError: boolean;
  hint?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
  name: string;
  onChange(v: any): void;
}

interface InputProps extends FormFieldProps {
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

interface SelectProps extends FormFieldProps {
  value: string;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    error,
    hasError,
    hint,
    isRequired,
    isValid,
    label,
    name,
    onChange,
    value,
    options,
  } = props;

  return (
    <FormGroup
      error={error}
      hasError={hasError}
      hint={hint}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.SelectField
        name={name}
        onChange={onChange}
        value={value}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectField>
    </FormGroup>
  );
};
