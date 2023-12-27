import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M17.555 9.445c.26.287.26.573 0 .86L6.93 20.93c-.287.26-.573.26-.86 0L.445 15.305c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L6.5 19.602 16.695 9.445c.287-.26.573-.26.86 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckLgRegularIcon);
export default ForwardRef;
