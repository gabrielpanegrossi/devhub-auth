import React from 'react';
import { useRequest } from 'ahooks';
import { Form, Field, Button, Subtitle } from '~components';
import { auth } from '~services';
import { validationSchema } from './schema';
import { Values, Context } from './interface';
import * as Styled from './style';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FormikHelpers } from 'formik';

function Email() {
  const initialValues = {
    email: '',
  };
  const context = useOutletContext<Context>();
  const navigate = useNavigate();

  const { runAsync, loading } = useRequest(auth.emailExists, { manual: true });

  const handleSubmit = async ({ email }: Values, helpers: FormikHelpers<Values>) => {
    context.setUserRecovery({ ...context.userRecovery, email });
    const response = await runAsync(email);

    if (response.exists) navigate('/password-recovery/code');
    else helpers.setFieldError('email', "We couldn't find any account with this email.");
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Subtitle>Insert your Email</Subtitle>
        <Styled.Text>Insert the Email from the account you want to recovery.</Styled.Text>
      </Styled.Content>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <>
            <Field name='email' label='Email' />
            <Button type='submit' loading={loading}>
              Continue
            </Button>
          </>
        )}
      </Form>
    </Styled.Container>
  );
}

export default Email;
