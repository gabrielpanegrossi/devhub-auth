import React from 'react';
import { Props } from './interface';
import * as Styled from './style';

export function Input({ label, onChangeFunction, ...props }: Props) {
  return (
    <Styled.Container>
      <Styled.Label>
        {label}
        <Styled.Input onChange={onChangeFunction} {...props} />
      </Styled.Label>
    </Styled.Container>
  );
}
