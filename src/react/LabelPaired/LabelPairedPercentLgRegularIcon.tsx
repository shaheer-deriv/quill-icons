import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPercentLgRegularIcon = (
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
      <path d='M2.5 9.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352Zm0 3.75c-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5C.846 8.443 1.562 8.026 2.5 8c.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25Zm10 6.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352Zm0 3.75c-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5.494-.807 1.21-1.224 2.148-1.25.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25Zm2.305-13.945-13.75 13.75c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l13.75-13.75c.287-.26.573-.26.86 0 .26.287.26.573 0 .86Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentLgRegularIcon);
export default ForwardRef;
