import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPasteBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.281 5.5c.063-.438.25-.792.563-1.063C4.156 4.146 4.542 4 5 4c.458 0 .844.146 1.156.438.313.27.5.625.563 1.062H8c.48 0 .896.146 1.25.438.333.27.563.625.688 1.062H8c-.917.02-1.667.354-2.25 1H3.5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2.5 7H2c-.313.02-.48.188-.5.5V16c.02.313.188.48.5.5h3V18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V7.5c.02-.563.219-1.031.594-1.406S1.438 5.52 2 5.5h1.281Zm1.219.25c.02.313.188.48.5.5.313-.02.48-.188.5-.5-.02-.313-.188-.48-.5-.5-.313.02-.48.188-.5.5ZM14 18.5c.313-.02.48-.188.5-.5v-6.375L12.375 9.5H8c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h6ZM8 20c-.563-.02-1.031-.219-1.406-.594S6.02 18.563 6 18v-8c.02-.563.219-1.031.594-1.406S7.437 8.02 8 8h4.375c.417 0 .77.146 1.063.438l2.124 2.124c.292.292.438.646.438 1.063V18c-.02.563-.219 1.031-.594 1.406S14.562 19.98 14 20H8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteBoldIcon);
export default ForwardRef;
