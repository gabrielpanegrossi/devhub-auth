import React from 'react';
import { Props } from './interface';
import * as Styled from './style';

export function Button({ children, kind, type = 'button', loading, disabled }: Props) {
  return (
    <Styled.Container>
      <Styled.Button
        kind={kind}
        disabled={disabled || loading}
        type={type}
        data-content={loading ? '' : children}
      >
        {!loading && children}
      </Styled.Button>
      {loading && <Styled.Spinner width={34} height={34} />}
    </Styled.Container>
  );
}
