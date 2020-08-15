import { renderHook } from '@testing-library/react-hooks';
import { useRouteMatch } from 'react-router-dom';

import { useRouteParams } from '../useRouteParams';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(),
}));

describe('useRouteParams', () => {
  afterEach(() => {
    (useRouteMatch as jest.Mock).mockReset();
  });

  it('should return an empty object if the route is not matched', () => {
    const mockReturn = null;
    (useRouteMatch as jest.Mock).mockReturnValue(mockReturn);

    const { result } = renderHook(() => useRouteParams('/route/:id'));

    expect(useRouteMatch).toHaveBeenCalledWith('/route/:id');
    expect(useRouteMatch).toHaveReturnedWith(mockReturn);
    expect(result.current).toEqual({});
  });

  it('should return an object with params mapped to it if the route is matched', () => {
    const mockReturn = { params: { id: 'matched-id' } };
    (useRouteMatch as jest.Mock).mockReturnValue(mockReturn);

    const { result } = renderHook(() => useRouteParams('/route/:id'));

    expect(useRouteMatch).toHaveBeenCalledWith('/route/:id');
    expect(useRouteMatch).toHaveReturnedWith(mockReturn);
    expect(result.current).toEqual({ id: 'matched-id' });
  });
});
