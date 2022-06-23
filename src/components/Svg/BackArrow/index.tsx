import * as React from 'react';

export const BackArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='graphics-document'
    {...props}
  >
    <path
      d='M23.25 12H.75M11.25 1.5.75 12l10.5 10.5'
      stroke='#777'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></path>
  </svg>
);
