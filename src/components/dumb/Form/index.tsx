import React from 'react';
import { Props } from './interface';
import { Formik, Form as FormikForm } from 'formik';
import * as Styled from './style';

export function Form<Values>({ children, ...props }: Props<Values>) {
  return (
    <Formik {...props}>
      {(formikProps) => (
        <Styled.FormikForm>
          {typeof children === 'function' ? children(formikProps) : children}
        </Styled.FormikForm>
      )}
    </Formik>
  );
}
