import React from 'react';
import { Props } from './interface';
import { Formik } from 'formik';
import * as Styled from './style';

function Form<Values>({ children, ...props }: Props<Values>) {
  return (
    <Formik {...props} validateOnMount>
      {(formikProps) => (
        <Styled.FormikForm>
          {typeof children === 'function' ? children(formikProps) : children}
        </Styled.FormikForm>
      )}
    </Formik>
  );
}

export default Form;
