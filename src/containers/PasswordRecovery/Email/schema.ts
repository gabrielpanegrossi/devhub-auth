import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email('Please insert a valid email.').required('Please insert an email.'),
});
