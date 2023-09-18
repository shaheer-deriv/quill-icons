import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const PaymentMethodPlaceholderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 128 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    ref={ref}
    {...props}
  >
    <g id='logo / payment method / placeholder'>
      <rect
        id='icon'
        x={0.5}
        y={0.5}
        width={127}
        height={79}
        rx={7.5}
        fill='#7F0DCF'
        fillOpacity={0.08}
        stroke='#7F0DCF'
        strokeDasharray='2 2'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPlaceholderIcon);
export default ForwardRef;
