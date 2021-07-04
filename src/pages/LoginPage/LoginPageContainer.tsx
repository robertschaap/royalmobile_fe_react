import React, { useCallback } from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import { fetchAuthToken, selectAuth, useDispatch, useSelector } from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';

import LoginPage from './LoginPage';

const LoginPageContainer: React.FC = () => {
  const authState = useSelector(selectAuth);
  const dispatch = useDispatch();

  const onDoLogin = useCallback(() => {
    dispatch(fetchAuthToken());
  }, [dispatch]);

  if (authState.isFetching) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.login')} />
        <PageSection>
          <Loader show />
        </PageSection>
      </>
    );
  }

  if (authState.hasError) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.login')} />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page={ContentUtil('pages.login')} />
      <LoginPage
        onDoLogin={onDoLogin} />
    </>
  );
};

export default LoginPageContainer;
