import { renderHook } from '@testing-library/react-hooks';

import { ContentUtil } from '../ContentUtil';

// eslint-disable-next-line no-console, prefer-destructuring
const warn = console.warn;
const mockedWarn = jest.fn();

describe('ContentUtil', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.warn = mockedWarn;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = warn;
  });

  it('should render a message when a correct id is passed', () => {
    const { result } = renderHook(() => ContentUtil('pages.home'));
    expect(result.current).toEqual('Home');
  });

  it('should render the raw id when an incorrect id is passed', () => {
    const { result } = renderHook(() => ContentUtil('Not an id'));
    expect(result.current).toEqual('Not an id');
    expect(mockedWarn).toHaveBeenCalled();
  });
});
