import { FormikConfig } from 'formik';

export interface Props<Values> extends FormikConfig<Values> {
  'aria-label'?: string;
  'aria-labelledby'?: string;
}
