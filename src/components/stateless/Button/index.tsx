import React from 'react';
import { ButtonProps } from './interface';
import * as Styled from './style';

export function Button({
  children,
  kind,
  type = 'button',
  loading,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <Styled.Container kind={kind}>
      <Styled.Button
        kind={kind}
        disabled={disabled || loading}
        type={type}
        data-content={loading ? '' : children}
        onClick={onClick}
        {...props}
      >
        {!loading && children}
      </Styled.Button>
      {loading && <Styled.Spinner width={34} height={34} />}
    </Styled.Container>
  );
}
