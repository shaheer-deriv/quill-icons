import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.563 13.625h10.874c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.563c-.344-.031-.532-.219-.563-.563.031-.343.219-.53.563-.562Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeCaptionBoldIcon);
export default ForwardRef;
