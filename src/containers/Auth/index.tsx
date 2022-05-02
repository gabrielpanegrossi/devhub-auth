import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field, Button, Text, Link } from '~components';
import { Values } from './interface';
import { validationSchema } from './schema';
import * as Styled from './style';

function Auth() {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: Values) => {
    console.log(values);
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
              <Button>Log In</Button>
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
