import { useState } from 'react';

import { FormValidator, FormValidatorResult } from '../utils/FormValidators';

type FormValues = Record<string, string>;

interface FormProps {
  initialValues: FormValues;
  validators?: Record<string, FormValidator[]>;
  onSubmit(v: FormValues): void;
}

export const useForm = ({ initialValues, validators, onSubmit }: FormProps) => {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState<FormValues>({});

  const hasErrors = Object.values(errors).some((v) => v !== '');

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    const validatorsArray = validators && validators[name];

    if (!validatorsArray) {
      return;
    }

    let result: FormValidatorResult | undefined;
    for (let i = 0; i < validatorsArray.length; i += 1) {
      result = validatorsArray[i](value);

      if (!result.isValid) {
        break;
      }
    }

    if (result?.isValid && errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }

    if (result?.isValid === false) {
      setErrors({
        ...errors,
        [name]: result.message,
      });
    }
  };

  const getFieldProps = (name: string) => {
    return {
      onBlur,
      onChange,
      name,

      value: values[name] ?? '',
      error: errors[name] ?? '',
      isValid: Boolean(!errors[name]),
    };
  };

  return {
    values,
    errors,
    isValid: !hasErrors,
    getFieldProps,
    onSubmit() {
      onSubmit(values);
    },
  };
};
