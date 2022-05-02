import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email('Please insert a valid email.').required('Please insert an email.'),
  password: yup
    .string()
    .min(8, 'The password must have at least 8 characters.')
    .required('Please insert a password.'),
});
