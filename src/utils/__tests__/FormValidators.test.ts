import { isRequired } from '../FormValidators';

describe('FormValidators', () => {
  describe('isRequired', () => {
    it('should be valid if a value is passed', () => {
      expect(isRequired('value')).toEqual({
        isValid: true,
      });
    });

    it('should be invalid if no value is passed', () => {
      expect(isRequired()).toEqual({
        isValid: false,
        message: expect.any(String),
      });
    });
  });
});
