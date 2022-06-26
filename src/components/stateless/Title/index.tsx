import React from 'react';
import * as Styled from './style';
import { Props } from './interface';

export function Title({ children, className }: Props) {
  return <Styled.H1 className={className}>{children}</Styled.H1>;
}
