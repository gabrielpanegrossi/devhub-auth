import * as yup from 'yup';

export const validationSchema = yup.object({
  code0: yup.string().required('Please insert a number.'),
  code1: yup.string().required('Please insert a number.'),
  code2: yup.string().required('Please insert a number.'),
  code3: yup.string().required('Please insert a number.'),
});
