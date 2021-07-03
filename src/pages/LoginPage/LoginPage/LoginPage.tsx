import React from 'react';

import Button from '../../../components/Button';
import { Input } from '../../../components/FormFields';
import { GridBase } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';
import PageTitle from '../../../components/PageTitle';
import SectionHeader from '../../../components/SectionHeader';
import { useForm } from '../../../hooks';
import { ContentUtil } from '../../../utils/ContentUtil';

import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    // call login endpoint,
    // show loader,
    // handle login,
    // build some auth logic
    // redirect to proper my account page
    onSubmit: console.log,
  });

  return (
    <>
      <PageTitle page={ContentUtil('pages.login')} />
      <PageSection>
        <SectionHeader>{ContentUtil('login.login')}</SectionHeader>
        <GridBase>
          <S.Section md={2} lg={2}>
            <p>{ContentUtil('login.info')}</p>
            <Input
              {...form.getFieldProps('username')}
              autoFocus
              isRequired
              label={ContentUtil('login.username')}
              placeholder={ContentUtil('login.username')} />
            <Input
              {...form.getFieldProps('password')}
              autoFocus
              isRequired
              label={ContentUtil('login.password')}
              placeholder={ContentUtil('login.password')} />
            <Button
              variant="primary"
              onClick={form.onSubmit}>
              {ContentUtil('login.login')}
            </Button>
          </S.Section>
        </GridBase>
      </PageSection>
    </>
  );
};

export default LoginPage;
