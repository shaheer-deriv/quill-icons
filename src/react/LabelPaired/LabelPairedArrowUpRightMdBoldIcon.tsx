import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.25 7c.458.042.708.292.75.75v7.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V9.562l-7.219 7.22c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063L8.437 8.5H2.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h7.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdBoldIcon);
export default ForwardRef;
