import React from 'react';

import FormGroup from '../FormGroup';

import * as S from './form-fields.styles';

interface FormFieldProps<T> {
  autoFocus?: boolean;
  error?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
  name: string;
  onBlur?(v: React.ChangeEvent<T>): void;
  onChange(v: React.ChangeEvent<T>): void;
}

interface InputProps<T> extends FormFieldProps<T> {
  placeholder?: string;
  value: string;
}

export const Input: React.FC<InputProps<HTMLInputElement>> = (props) => {
  const {
    autoFocus,
    error,
    isRequired,
    isValid,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <FormGroup
      error={error}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.InputField
        data-testid={name}
        autoFocus={autoFocus}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value} />
    </FormGroup>
  );
};

interface SelectProps<T> extends FormFieldProps<T> {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
}

export const Select: React.FC<SelectProps<HTMLSelectElement>> = (props) => {
  const {
    autoFocus,
    error,
    isRequired,
    isValid,
    label,
    name,
    onBlur,
    onChange,
    options,
    value,
  } = props;

  return (
    <FormGroup
      error={error}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.SelectField
        data-testid={name}
        autoFocus={autoFocus}
        name={name}
        onBlur={onBlur}
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
