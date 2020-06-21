import { useRouteMatch } from 'react-router-dom';

export const useRouteParams = (route: string): Record<string, string> => {
  const match = useRouteMatch(route);
  return match === null ? {} : match.params;
};
