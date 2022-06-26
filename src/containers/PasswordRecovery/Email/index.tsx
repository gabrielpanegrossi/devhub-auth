import React from 'react';
import { Form, Field, Button, Subtitle } from '~components';
import { auth } from '~services';
import { validationSchema } from './schema';
import { Values, Context } from './interface';
import * as Styled from './style';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import { useMutation } from 'react-query';

function Email() {
  const initialValues = {
    email: '',
  };
  const context = useOutletContext<Context>();
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation(auth.emailExists);

  const handleSubmit = async ({ email }: Values, helpers: FormikHelpers<Values>) => {
    context.setUserRecovery({ ...context.userRecovery, email });
    const response = await mutateAsync(email);

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
            <Button type='submit' loading={isLoading}>
              Continue
            </Button>
          </>
        )}
      </Form>
    </Styled.Container>
  );
}

export default Email;
