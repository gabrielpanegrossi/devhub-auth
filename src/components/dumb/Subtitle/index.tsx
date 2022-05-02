import React from 'react';
import * as Styled from './style';
import { Props } from './interface';

export function Subtitle({ children, className }: Props) {
  return <Styled.H2 className={className}>{children}</Styled.H2>;
}
