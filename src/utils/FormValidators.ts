export type FormValidatorResult = { isValid: true } | { isValid: false; message: string };
export type FormValidator = (value?: string) => FormValidatorResult;

export const isRequired: FormValidator = (value) => {
  const isValid = Boolean(value);

  if (isValid) {
    return {
      isValid: true,
    };
  }

  return {
    isValid: false,
    message: 'form.validate.isRequired',
  };
};
