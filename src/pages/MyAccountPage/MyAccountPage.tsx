import React from 'react';

import Button from '../../components/Button';
import { Input } from '../../components/FormFields';
import { GridBase } from '../../components/Grid';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import SectionHeader from '../../components/SectionHeader';
import { useForm } from '../../hooks';
import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './my-account-page.styles';

const MyAccountPage: React.FC = () => {
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
      <PageTitle page={ContentUtil('pages.myAccount')} />
      <PageSection>
        <SectionHeader>{ContentUtil('myAccount.login')}</SectionHeader>
        <GridBase>
          <S.Section md={2} lg={2}>
            <p>{ContentUtil('myAccount.info')}</p>
            <Input
              {...form.getFieldProps('username')}
              autoFocus
              isRequired
              label={ContentUtil('myAccount.username')}
              placeholder={ContentUtil('myAccount.username')} />
            <Input
              {...form.getFieldProps('password')}
              autoFocus
              isRequired
              label={ContentUtil('myAccount.password')}
              placeholder={ContentUtil('myAccount.password')} />
            <Button
              variant="primary"
              onClick={form.onSubmit}>
              {ContentUtil('myAccount.login')}
            </Button>
          </S.Section>
        </GridBase>
      </PageSection>
    </>
  );
};

export default MyAccountPage;
