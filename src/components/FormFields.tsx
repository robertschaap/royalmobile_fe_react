import React from 'react';
import styled from 'styled-components';

import FormGroup from './FormGroup';

const InputField = styled.input`
  border: unset;
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
  outline: none;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;

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
      <InputField
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </FormGroup>
  );
};
