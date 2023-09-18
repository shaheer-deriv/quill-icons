import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareRegularIcon = (
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
        d='M10.5 4h5c.313.02.48.188.5.5v5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V5.719l-7.656 7.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L14.281 5H10.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5ZM2 6h4.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v10c0 .292.094.531.281.719A.974.974 0 0 0 2 19h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 18v-4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V18c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareRegularIcon);
export default ForwardRef;
