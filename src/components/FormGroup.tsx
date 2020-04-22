import React from 'react';
import styled from 'styled-components';

const FormGroupBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const FormLabel = styled.label`
  display: flex;
  font-weight: 500;
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

const Hint = styled.div`
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
`;

const Error = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
`;

const Icon = styled.span<{ isValid?: boolean }>`
  display: inline-block;
  background-color: ${({ isValid }) => isValid ? 'lightgreen' : 'red'};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-left: auto;
`;

interface FormGroupProps {
  children: React.ReactNode;
  error: string;
  hasError: boolean;
  hint: string;
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
    <FormGroupBase>
      <FormLabel>
        {label}
        {isRequired && ' * '}
        {hasError && <Icon />}
        {isValid && <Icon isValid />}
      </FormLabel>
      {children}
      {hasError ? <Error>{error}</Error> : <Hint>{hint}</Hint>}
    </FormGroupBase>
  );
};

export default FormGroup;
