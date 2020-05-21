interface RouteParams {
  [key: string]: string | number;
}

const formatRoute = (route: string, params: RouteParams): string => {
  return Object.entries(params).reduce((formattedRoute, [key, value]) => {
    return formattedRoute.replace(`:${key}`, value.toString());
  }, route);
};

export default formatRoute;
