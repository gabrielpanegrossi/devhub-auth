import * as React from 'react';

export const CloseX = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='18'
    height='18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 14'
    role='graphics-document'
    {...props}
  >
    <path
      d='M.75 13.25 13.25.75M.75.75l12.5 12.5'
      stroke='#777'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></path>
  </svg>
);
