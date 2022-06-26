import React, { ReactNode } from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  quantity: number;
}

export interface StyledProps {
  error?: string;
  touched?: boolean;
}
