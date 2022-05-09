import React from 'react';

export interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: string;
  className?: string;
}
