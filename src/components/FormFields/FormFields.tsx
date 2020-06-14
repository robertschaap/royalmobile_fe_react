import React from 'react';
import * as S from './form-fields.styles';

import FormGroup from '../FormGroup';

interface FormFieldProps<T> {
  error: string;
  hint?: string;
  isRequired?: boolean;
  isValid: boolean;
  label: string;
  name: string;
  onBlur(v: React.ChangeEvent<T>): void;
  onChange(v: React.ChangeEvent<T>): void;
}

interface InputProps<T> extends FormFieldProps<T> {
  placeholder: string;
  value: string;
}

export const Input: React.FC<InputProps<HTMLInputElement>> = (props) => {
  const {
    error,
    hint,
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
      hint={hint}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.InputField
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        type="text"
        value={value}
      />
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
    error,
    hint,
    isRequired,
    isValid,
    label,
    name,
    onBlur,
    onChange,
    value,
    options,
  } = props;

  return (
    <FormGroup
      error={error}
      hint={hint}
      isRequired={isRequired}
      isValid={isValid}
      label={label}>
      <S.SelectField
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
