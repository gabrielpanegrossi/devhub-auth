import React from 'react';
import * as Styled from './style';
import { Props } from './interface';

export function Text({ children, className }: Props) {
  return <Styled.P className={className}>{children}</Styled.P>;
}
