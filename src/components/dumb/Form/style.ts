import styled from 'styled-components';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  > :not(:first-child) {
    margin-top: 32px;
  }

  > div:last-child {
    margin-top: 40px;
  }
`;
