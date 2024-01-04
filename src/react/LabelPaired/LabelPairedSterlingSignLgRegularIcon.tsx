import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSterlingSignLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.375 11.438V15.5h6.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-6.25A15.293 15.293 0 0 1 1.891 23h10.234c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875a.612.612 0 0 1-.547-.312.664.664 0 0 1 0-.625l.04-.079a14.548 14.548 0 0 0 1.757-6.484H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h1.25v-4.062c.026-1.329.482-2.435 1.367-3.32.886-.886 1.992-1.342 3.32-1.368h.274c.52 0 1.016.078 1.484.234l3.125 1.055c.339.156.47.417.39.781-.155.365-.416.495-.78.39L8.18 8.196A3.233 3.233 0 0 0 7.086 8h-.274c-.963.026-1.77.365-2.421 1.016-.651.65-.99 1.458-1.016 2.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgRegularIcon);
export default ForwardRef;
