interface RouteParams {
  [key: string]: string | number;
}

/**
 * Takes a route string with parameters formatted as `:param` and maps the corresponding
 * values from the params object (`{ param: 'value' }`) to them
 */
const formatRoute = (route: string, params: RouteParams): string => {
  return Object.entries(params).reduce((formattedRoute, [key, value]) => {
    return formattedRoute.replace(`:${key}`, value.toString());
  }, route);
};

export default formatRoute;
