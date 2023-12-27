import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMicrosoftLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M.25 6.75h8.398v8.398H.25V6.75Zm9.102 0h8.398v8.398H9.352V6.75ZM.25 15.852h8.398v8.398H.25v-8.398Zm9.102 0h8.398v8.398H9.352v-8.398Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftLgIcon);
export default ForwardRef;
