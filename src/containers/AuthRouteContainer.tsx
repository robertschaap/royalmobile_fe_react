import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import routes from '../constants/routes';
import { selectAuth, useSelector } from '../store';

interface AuthRouteContainerProps {
  path: string;
  component: React.LazyExoticComponent<React.FC>;
}

const AuthRouteContainer: React.FC<AuthRouteContainerProps> = (props) => {
  const { path, component } = props;

  const authState = useSelector(selectAuth);

  if (!authState.collection?.token) {
    return (
      <Redirect to={routes.LOGIN}/>
    );
  }

  return (
    <Route path={path} component={component} />
  );
};

export default AuthRouteContainer;
