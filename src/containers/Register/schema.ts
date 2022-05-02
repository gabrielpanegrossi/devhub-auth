import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Please insert your Name.'),
  lastName: yup.string().required('Please insert your Last Name.'),
  email: yup.string().email('Please insert a valid email.').required('Please insert an email.'),
  password: yup
    .string()
    .min(8, 'The password must have at least 8 characters.')
    .required('Please insert a password.'),
  passwordConfirmation: yup
    .string()
    .required('Please confirm your password.')
    .test('match', 'Passwords do not match.', function () {
      return this.parent.password === this.parent.passwordConfirmation;
    }),
});
