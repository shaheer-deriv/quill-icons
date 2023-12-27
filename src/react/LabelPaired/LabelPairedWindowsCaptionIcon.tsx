import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowsCaptionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 5.703v3.563h4.313V5.094l-4.313.61Zm0 7.594V9.78h4.313v4.125l-4.313-.61Zm4.781.656V9.781h5.719v4.969l-5.719-.797Zm0-8.906 5.719-.797v5.016H5.031v-4.22Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowsCaptionIcon);
export default ForwardRef;
