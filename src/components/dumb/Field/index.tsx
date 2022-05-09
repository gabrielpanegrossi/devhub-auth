import React from 'react';
import { useField } from 'formik';
import { Props } from './interface';
import * as Styled from './style';

export function Field({ label, children, ...props }: Props) {
  const [field, meta, helpers] = useField(props);
  const handleChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
    field.onChange(event);
  };

  return (
    <Styled.Container>
      <Styled.Label>
        {label}
        <Styled.Input
          onChange={handleChange}
          error={meta.error}
          touched={meta.touched}
          aria-label={props.name}
          {...props}
        />
      </Styled.Label>
      {meta.touched && meta.error ? (
        <Styled.Error className='error' aria-label='Input error'>
          {meta.error}
        </Styled.Error>
      ) : null}
    </Styled.Container>
  );
}
