import React from 'react';
import { Props } from './interface';
import { Formik } from 'formik';
import * as Styled from './style';

export function Form<Values>({ children, ...props }: Props<Values>) {
  return (
    <Formik {...props} validateOnMount>
      {(formikProps) => (
        <Styled.FormikForm
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
        >
          {typeof children === 'function' ? children(formikProps) : children}
        </Styled.FormikForm>
      )}
    </Formik>
  );
}
