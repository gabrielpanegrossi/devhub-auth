import React from 'react';
import { useRequest } from 'ahooks';
import { useNavigate } from 'react-router-dom';
import { Form, Field, Button, Text, Link } from '~components';
import { auth } from '~services';
import { Values } from './interface';
import { validationSchema } from './schema';
import * as Styled from './style';

function Register() {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const navigate = useNavigate();

  const { runAsync, loading } = useRequest(auth.register, { manual: true });

  const handleSubmit = async (values: Values) => {
    console.log('primeiro');
    await runAsync(values);
    console.log('segundo');
    navigate('/');
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Handler>
          <Styled.Register>
            <Styled.Subtitle id='register-form-title'>Sign Up</Styled.Subtitle>
            <Styled.SubText>Access all your dev content on the same place!</Styled.SubText>
            <Form
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
              aria-labelledby='register-form-title'
            >
              {({ values }: { values: Values }) => {
                return (
                  <>
                    <Field name='name' label='Name *' value={values.name} autoFocus={true} />
                    <Field name='lastName' label='Last Name *' value={values.lastName} />
                    <Field name='email' label='Email *' value={values.email} />
                    <Field
                      name='password'
                      label='Password *'
                      type='password'
                      value={values.password}
                    />
                    <Field
                      name='passwordConfirmation'
                      label='Confirm your password *'
                      type='password'
                      value={values.passwordConfirmation}
                    />
                    <Button type='submit' loading={loading}>
                      Sign Up
                    </Button>
                  </>
                );
              }}
            </Form>
          </Styled.Register>
          <Styled.Auth>
            <Text>Do you have an account?</Text>
            <Link to='/'>Log in</Link>
          </Styled.Auth>
        </Styled.Handler>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Register;
