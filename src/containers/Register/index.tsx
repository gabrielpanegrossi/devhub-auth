import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field, Button, Text } from '~components';
import { auth } from '~services';
import { Values } from './interface';
import { validationSchema } from './schema';
import * as Styled from './style';
import { useMutation } from 'react-query';

function Register() {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation(auth.register);

  const handleSubmit = async (values: Values) => {
    await mutateAsync(values);
    navigate('/');
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Register>
          <Styled.RegisterHeader>
            <Styled.Title>Sign Up</Styled.Title>
            <Text>Access all your dev content on the same place!</Text>
          </Styled.RegisterHeader>
          <Form
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            aria-label='register-form-title'
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
                  <Button type='submit' loading={isLoading}>
                    Sign Up
                  </Button>
                </>
              );
            }}
          </Form>
        </Styled.Register>
        <Styled.Auth>
          <Text>Do you have an account?</Text>
          <Styled.Link to='/'>Log in</Styled.Link>
        </Styled.Auth>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Register;
