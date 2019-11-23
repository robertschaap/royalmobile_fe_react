interface RouteParams {
  [key: string]: string | number;
}

const formatRoute = (route: string, params: RouteParams): string => {
  for (let param in params) {
    route = route.replace(`:${param}`, params[param].toString());
  }

  return route;
}

export default formatRoute;
