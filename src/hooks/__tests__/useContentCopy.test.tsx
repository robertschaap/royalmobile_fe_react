import { renderHook } from '@testing-library/react-hooks';
import { useContentCopy } from '../useContentCopy';

const warn = console.warn;
const mockedWarn = jest.fn();

describe('useContentCopy', () => {
  beforeEach(() => {
    console.warn = mockedWarn;
  });

  afterEach(() => {
    console.warn = warn;
  });

  it('should render a message when a correct id is passed', () => {
    const { result } = renderHook(() => useContentCopy('navigation.home'));
    expect(result.current).toEqual('Home');
  });

  it('should render the raw id when an incorrect id is passed', () => {
    const { result } = renderHook(() => useContentCopy('Not an id'));
    expect(result.current).toEqual('Not an id');
    expect(mockedWarn).toHaveBeenCalled();
  });
});
