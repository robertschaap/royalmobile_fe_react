interface RouteParams {
  [key: string]: string | number;
}

const formatRoute = (route: string, params: RouteParams): string => {
  let formattedRoute = route;

  for (const param in params) {
    formattedRoute = formattedRoute.replace(`:${param}`, params[param].toString());
  }

  return formattedRoute;
};

export default formatRoute;
