import React from 'react';
import { Props } from './interface';
import * as Styled from './style';

export function Button({ children, kind, type = 'submit' }: Props) {
  return (
    <Styled.Button kind={kind} type={type} data-content={children}>
      {children}
    </Styled.Button>
  );
}
