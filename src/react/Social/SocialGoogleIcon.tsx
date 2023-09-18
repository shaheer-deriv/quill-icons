import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialGoogleIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#3E82F1'
        d='M32 16.373c0-1.097-.1-2.194-.294-3.273H16.325v6.185h8.787a7.342 7.342 0 0 1-3.256 4.828l5.274 4.019c3.09-2.787 4.87-6.887 4.87-11.76Z'
      />
      <path
        fill='#32A753'
        d='M21.858 24.115c-1.458.962-3.33 1.529-5.53 1.529-4.257 0-7.852-2.814-9.136-6.6L1.734 23.19c2.77 5.404 8.42 8.82 14.593 8.811 4.412 0 8.108-1.43 10.805-3.875l-5.274-4.01Z'
      />
      <path
        fill='#F9BB00'
        d='M7.19 12.964 1.735 8.819a15.768 15.768 0 0 0 0 14.376L7.19 19.05a9.351 9.351 0 0 1 0-6.086Z'
      />
      <path
        fill='#E74133'
        d='M16.327 0C10.154 0 4.503 3.416 1.734 8.82l5.457 4.144c1.284-3.785 4.88-6.599 9.136-6.599 2.394 0 4.55.81 6.237 2.392l4.687-4.594C24.426 1.583 20.73 0 16.327 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialGoogleIcon);
export default ForwardRef;
