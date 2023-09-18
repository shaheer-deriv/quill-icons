import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopyBoldIcon = (
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
        d='M14 16H8c-.563-.02-1.031-.219-1.406-.594S6.02 14.562 6 14V6c.02-.563.219-1.031.594-1.406S7.437 4.02 8 4h4.375c.417 0 .77.146 1.063.438l2.124 2.125c.292.291.438.645.438 1.062V14c-.02.563-.219 1.031-.594 1.406S14.562 15.98 14 16ZM2 8h3v1.5H2c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h6c.313-.02.48-.188.5-.5v-1H10v1c-.02.563-.219 1.031-.594 1.406S8.562 19.98 8 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-8c.02-.563.219-1.031.594-1.406S1.438 8.02 2 8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyBoldIcon);
export default ForwardRef;
