import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../useForm';

const validatorFunction = jest.fn();
const onSubmitFunction = jest.fn();

const form = {
  initialValues: { firstName: 'name' },
  validators: { firstName: [validatorFunction] },
  onSubmit: onSubmitFunction,
};

describe('useForm', () => {
  describe('shape', () => {
    it('should return a form', () => {
      const { result } = renderHook(() => useForm(form));

      expect(result.current).toMatchObject({
        values: { firstName: 'name' },
        errors: {},
        isValid: true,
        getFieldProps: expect.any(Function),
        onSubmit: expect.any(Function),
      });
    });

    it('should return a form field', () => {
      const { result } = renderHook(() => useForm(form));
      const field = result.current.getFieldProps('firstName');

      expect(field).toMatchObject({
        onBlur: expect.any(Function),
        onChange: expect.any(Function),
        name: 'firstName',

        value: 'name',
        error: '',
        isValid: true,
      });
    });
  });

  describe('value handling', () => {
    it('should change a value when the onChange handler is called', () => {
      const { result } = renderHook(() => useForm(form));
      const field = result.current.getFieldProps('firstName');
      const event = { target: { name: 'firstName', value: 'updated-value' } };

      act(() => {
        field.onChange(event as React.ChangeEvent<HTMLInputElement>);
      });

      const updatedField = result.current.getFieldProps('firstName');

      expect(result.current.values.firstName).toEqual('updated-value');
      expect(updatedField.value).toEqual('updated-value');
    });

    it('should submit the form when the onSubmit handler is called', () => {
      const { result } = renderHook(() => useForm(form));

      act(() => {
        result.current.onSubmit();
      });

      expect(onSubmitFunction).toHaveBeenCalledWith(result.current.values);
    });
  });

  describe('error handling', () => {
    it('should handle a valid field when the onBlur handler is called', () => {
      const { result } = renderHook(() => useForm(form));
      const field = result.current.getFieldProps('firstName');
      const event = { target: { name: 'firstName', value: 'updated-value' } };

      validatorFunction.mockReturnValue({ isValid: true });

      act(() => {
        field.onBlur(event as React.ChangeEvent<HTMLInputElement>);
      });

      const updatedField = result.current.getFieldProps('firstName');

      expect(validatorFunction).toHaveBeenCalled();
      expect(result.current.errors.firstName).toBeFalsy();
      expect(result.current.isValid).toBe(true);
      expect(updatedField.error).toBe('');
      expect(updatedField.isValid).toBe(true);
    });

    it('should handle an invalid field when the onBlur handler is called', () => {
      const { result } = renderHook(() => useForm(form));
      const field = result.current.getFieldProps('firstName');
      const event = { target: { name: 'firstName', value: 'updated-value' } };

      validatorFunction.mockReturnValue({ isValid: false, message: 'error-message' });

      act(() => {
        field.onBlur(event as React.ChangeEvent<HTMLInputElement>);
      });

      const updatedField = result.current.getFieldProps('firstName');

      expect(validatorFunction).toHaveBeenCalled();
      expect(result.current.errors.firstName).toBe('error-message');
      expect(result.current.isValid).toBe(false);
      expect(updatedField.error).toBe('error-message');
      expect(updatedField.isValid).toBe(false);
    });
  });
});
