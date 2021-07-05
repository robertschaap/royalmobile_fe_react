import React from 'react';

import Button from '../../../components/Button';
import { Input } from '../../../components/FormFields';
import { GridBase } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';
import { useForm } from '../../../hooks';
import { ContentUtil } from '../../../utils/ContentUtil';
import { isRequired } from '../../../utils/FormValidators';

import * as S from './login-page.styles';

const initialValues = {
  username: '',
  password: '',
};

interface LoginPageProps {
  onDoLogin(v: typeof initialValues): void;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const { onDoLogin } = props;

  const form = useForm({
    initialValues,
    validators: {
      username: [isRequired],
      password: [isRequired],
    },
    onSubmit: onDoLogin,
  });

  return (
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
            isRequired
            label={ContentUtil('login.password')}
            placeholder={ContentUtil('login.password')} />
          {!form.isValid && <S.FormError messageId="common.formHasErrors" />}
          <Button
            disabled={!form.isValid}
            onClick={form.onSubmit}
            variant="primary">
            {ContentUtil('login.login')}
          </Button>
        </S.Section>
      </GridBase>
    </PageSection>
  );
};

export default LoginPage;
