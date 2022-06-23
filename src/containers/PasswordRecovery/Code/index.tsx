import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Form, CodeField, Button, Subtitle } from '~components';
import { auth } from '~services';
import { validationSchema } from './schema';
import { Values, Context } from './interface';
import * as Styled from './style';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FormikHelpers } from 'formik';

function Email() {
  const initialValues = {
    code0: '',
    code1: '',
    code2: '',
    code3: '',
  };
  const context = useOutletContext<Context>();
  const navigate = useNavigate();

  const { runAsync, loading } = useRequest(auth.recoveryCode, { manual: true });

  const handleSubmit = async (
    { code0, code1, code2, code3 }: Values,
    helpers: FormikHelpers<Values>
  ) => {
    const code = code0 + code1 + code2 + code3;
    context.setUserRecovery({ ...context.userRecovery, code });

    const response = await runAsync({ ...context.userRecovery, code });
    console.log({ ...context.userRecovery, code }, response);
    if (response.isValid) navigate('/password-recovery/set-password');
    else
      helpers.setFieldError(
        'code',
        'Invalid code, please insert the code you received on your email.'
      );
  };

  useEffect(() => {
    if (!context.userRecovery?.email) navigate('/password-recovery');
  }, [context, navigate]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Subtitle>We have sent a four digits code to your Email.</Subtitle>
        <Styled.Text>
          Insert the code that we sent you in <span>{context.userRecovery?.email}</span>.
        </Styled.Text>
      </Styled.Content>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <>
            <CodeField name='code' label='Code' type='tel' quantity={4} />
            <Button type='submit' loading={loading} disabled={!isValid}>
              Continue
            </Button>
          </>
        )}
      </Form>
      <Styled.Button kind='tertiary'>Send email again</Styled.Button>
    </Styled.Container>
  );
}

export default Email;
