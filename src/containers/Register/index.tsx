import React from 'react';
import { FormikHelpers } from 'formik';
import { Form, Field, Button, Text, Link } from '~components';
import { Values } from './interface';
import { validationSchema } from './schema';
import * as Styled from './style';
import { useRequest } from 'ahooks';
import { auth } from '~services';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = async (values: Values, helpers: FormikHelpers<Values>) => {
    await runAsync(values);
    navigate('/');
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Handler>
          <Styled.Register>
            <Styled.Subtitle>Sign Up</Styled.Subtitle>
            <Styled.SubText>Access all your dev content on the same place!</Styled.SubText>
            <Form
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ isValid, values }: { isValid: boolean; values: Values }) => (
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
                  <Button type='submit' loading={loading} disabled={!isValid}>
                    Sign Up
                  </Button>
                </>
              )}
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
