import React from 'react';
import { useRequest } from 'ahooks';
import { Form, Field, Button, Text, Link } from '~components';
import { auth } from '~services';
import { Values } from './interface';
import { validationSchema } from './schema';
import * as Styled from './style';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();

  const { runAsync: runAuth, loading: loadingAuth } = useRequest(auth.signin, { manual: true });
  const { runAsync: runTokenAuthorization, loading: loadingTokenAuthorization } = useRequest(
    auth.validateAuthorization,
    { manual: true }
  );

  useEffect(() => {
    (async () => {
      const response = await runTokenAuthorization();
      if (response) navigate('/logged');
    })();
  }, [runTokenAuthorization, navigate]);

  const handleSubmit = async (values: Values) => {
    const response = await runAuth(values);

    if (response) navigate('/logged');
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Article>
          <Styled.Title>DevHub</Styled.Title>
          <Styled.Text>All your dev world in one place.</Styled.Text>
        </Styled.Article>
        <Styled.Aside>
          <Styled.Auth>
            <Form
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Field name='email' label='Email' />
              <Field name='password' label='Password' type='password' />
              <Button type='submit' loading={loadingAuth}>
                Log In
              </Button>
              <Styled.Link to='/resetpassword'>Forgot password?</Styled.Link>
            </Form>
          </Styled.Auth>
          <Styled.Register>
            <Text>Don't have an account?</Text>
            <Link to='/signup'>Sign up</Link>
          </Styled.Register>
        </Styled.Aside>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Auth;
