import { useState } from 'react';

type FormValues = Record<string, string>;

interface FormProps {
  initialValues: FormValues;
  onSubmit(v: FormValues): void;
}

export const useForm = ({ initialValues, onSubmit }: FormProps) => {
  const [values, setValues] = useState({ ...initialValues });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const getFieldProps = (name: string) => {
    return {
      onChange,
      name,

      value: values[name] ?? '',
      error: '',
      hasError: false,
      isValid: true,
    };
  };

  return {
    getFieldProps,
    onSubmit() {
      onSubmit(values);
    },
  };
};
