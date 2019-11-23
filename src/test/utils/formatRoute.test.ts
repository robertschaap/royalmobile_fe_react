import formatRoute from '../../utils/formatRoute';

describe('formatRoute', () => {
  it('should format keys based on the object passed', () => {
    const route = "www.test.com/:one/:two"
    const params = { one: 1, two: 2 };

    expect(
      formatRoute(route, params)
    ).toEqual("www.test.com/1/2");
  });
});
