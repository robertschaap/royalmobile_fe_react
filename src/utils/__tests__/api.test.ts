import { put } from 'redux-saga/effects';
import api from '../api';

window.fetch = jest.fn();
const apiRes = {
  json: jest.fn(),
};

const getCallProps = {
  onSuccessAction: jest.fn(),
  onErrorAction: jest.fn(),
  url: 'api-url',
};

jest.mock('redux-saga/effects', () => ({
  put: jest.fn(),
}));

describe('api', () => {
  describe('GET', () => {
    it('should handle a successful GET call with status success', async () => {
      const generator = api.get(getCallProps);
      const apiCall = generator.next().value as Generator;

      apiCall.next();
      expect(window.fetch).toHaveBeenCalledWith('api-url', undefined);

      apiCall.next(apiRes);
      expect(apiRes.json).toHaveBeenCalled();

      apiCall.next({
        status: 'success',
        data: {},
      });
      expect(getCallProps.onSuccessAction).toHaveBeenCalled();
      expect(put).toHaveBeenCalled();
    });

    it('should handle a successful GET call without status success', async () => {
      const generator = api.get(getCallProps);
      const apiCall = generator.next().value as Generator;

      apiCall.next();
      expect(window.fetch).toHaveBeenCalledWith('api-url', undefined);

      apiCall.next(apiRes);
      expect(apiRes.json).toHaveBeenCalled();

      apiCall.next({
        status: 'error',
      });
      expect(getCallProps.onErrorAction).toHaveBeenCalled();
      expect(put).toHaveBeenCalled();
    });

    it('should handle an unsuccessful GET call', async () => {
      const generator = api.get(getCallProps);
      const apiCall = generator.next().value as Generator;

      apiCall.next();
      apiCall.throw('');
      expect(getCallProps.onErrorAction).toHaveBeenCalled();
      expect(put).toHaveBeenCalled();
    });
  });
});
