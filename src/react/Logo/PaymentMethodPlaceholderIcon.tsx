import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const PaymentMethodPlaceholderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    {...props}
  >
    <rect
      width={127}
      height={79}
      x={0.5}
      y={0.5}
      fill='#7F0DCF'
      fillOpacity={0.08}
      stroke='#7F0DCF'
      strokeDasharray='2 2'
      rx={7.5}
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPlaceholderIcon);
export default ForwardRef;
