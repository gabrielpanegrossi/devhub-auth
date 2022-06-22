import React from 'react';
import { useRequest } from 'ahooks';
import { Form, Field, Button, Subtitle } from '~components';
import { auth } from '~services';
import { validationSchema } from './schema';
import { Values, Context } from './interface';
import * as Styled from './style';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Email() {
  const initialValues = {
    email: '',
  };
  const { useRecovery, setUserRecovery } = useOutletContext<Context>();
  const navigate = useNavigate();

  const { runAsync, loading } = useRequest(auth.validateEmail, { manual: true });

  const handleSubmit = async (values: Values) => {
    setUserRecovery({ ...useRecovery, email: values.email });
    const response = await runAsync(values.email);

    if (response) navigate('/password-recovery/code');
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
            <Button type='submit' loading={loading} disabled={!isValid}>
              Continue
            </Button>
          </>
        )}
      </Form>
    </Styled.Container>
  );
}

export default Email;
