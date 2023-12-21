import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileShieldMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M10 19h.125c.25.27.52.531.813.781-.271.146-.584.219-.938.219H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.563.219-1.031.594-1.406S1.438 4.02 2 4h4.875c.417 0 .77.146 1.063.438l3.625 3.625c.291.291.437.645.437 1.062v1.344l-1 .406V10H7.5a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 6 8.5V5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 6v12c0 .292.094.531.281.719A.974.974 0 0 0 2 19h8Zm1-10a.837.837 0 0 0-.156-.219L7.219 5.156A.464.464 0 0 0 7 5.031V8.5c.02.313.188.48.5.5H11Zm-1 4.406c0 .875.219 1.813.656 2.813.438 1 1.219 1.833 2.344 2.5v-6.5l-3 1.187Zm7 0-3-1.187v6.5c1.125-.667 1.906-1.5 2.344-2.5.437-1 .656-1.938.656-2.813Zm-3.219-2.344 3.75 1.5c.292.126.448.355.469.688.02.688-.094 1.458-.344 2.313-.229.854-.646 1.677-1.25 2.468-.625.792-1.5 1.427-2.625 1.907a.664.664 0 0 1-.562 0c-1.125-.48-2-1.115-2.625-1.907-.604-.791-1.021-1.614-1.25-2.468-.25-.855-.365-1.626-.344-2.313.02-.333.177-.563.469-.688l3.75-1.5a.664.664 0 0 1 .562 0Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldMdRegularIcon);
export default ForwardRef;
