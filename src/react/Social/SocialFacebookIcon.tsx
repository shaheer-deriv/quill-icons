import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialFacebookIcon = (
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
      <circle cx={16} cy={16} r={16} fill='#1877F2' />
      <path
        fill='#fff'
        d='M18.5 31.806V20.75h3.728l.71-4.653H18.5v-3.02c0-1.273.62-2.514 2.608-2.514h2.017V6.603s-1.83-.315-3.581-.315c-3.655 0-6.044 2.229-6.044 6.263v3.547H9.438v4.653H13.5v11.055a16.122 16.122 0 0 0 5 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialFacebookIcon);
export default ForwardRef;
