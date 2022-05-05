import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field, Button, Text, Link } from '~components';
import { Values } from './interface';
import { validationSchema } from './schema';
import { signUp, firestore } from '~services/firebase';
import * as Styled from './style';
import { setUserId } from '../../state';

function Register() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = async (values: Values) => {
    const { email, password, name, lastName } = values;
    const registerResponse = await signUp(email, password);
    if (registerResponse) {
      await firestore.newDoc('user', registerResponse?.user.uid || values.email, {
        email,
        name,
        lastName,
      });
    }

    // dispatch(setUserId(registerResponse?.user.uid));
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
              <Field name='name' label='Name *' />
              <Field name='lastName' label='Last Name *' />
              <Field name='email' label='Email *' />
              <Field name='password' label='Password *' type='password' />
              <Field name='passwordConfirmation' label='Confirm your password *' type='password' />
              <Button>Sign Up</Button>
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
