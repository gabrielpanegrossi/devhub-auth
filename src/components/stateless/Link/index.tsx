import React from 'react';
import * as Styled from './style';
import { Props } from './interface';

export function Link({ children, to, className }: Props) {
  return (
    <Styled.Link to={to} className={className}>
      {children}
    </Styled.Link>
  );
}
