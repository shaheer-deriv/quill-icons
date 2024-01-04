import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileCircleCheckLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.5 24.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V13H9.375a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V6.75h-5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v15c0 .365.117.664.352.898.234.235.533.352.898.352zm-3.125-12.5h4.375a1.042 1.042 0 0 0-.195-.273L9.023 6.945a.58.58 0 0 0-.273-.156v4.336c.026.39.234.599.625.625M2.5 5.5h6.094c.52 0 .963.182 1.328.547l4.531 4.531c.365.365.547.807.547 1.328V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742m8.555 11.484-4.14 4.18c-.313.234-.613.234-.9 0l-2.07-2.11c-.26-.286-.26-.572 0-.859.287-.234.573-.234.86 0l1.64 1.64 3.75-3.75c.287-.233.573-.233.86 0 .26.313.26.613 0 .9'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckLgRegularIcon);
export default ForwardRef;
