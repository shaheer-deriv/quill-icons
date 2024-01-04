import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleTwoLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 6.75c-1.589.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C1.64 12.505 1.25 13.964 1.25 15.5c0 1.537.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.786 1.146 4.375 1.172 1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C13.047 7.167 11.589 6.776 10 6.75m0 18.75c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.411 1.328-5C2.266 8.938 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328M8.477 12.297l-.547.547c-.313.234-.612.221-.899-.04-.234-.312-.221-.611.04-.898l.546-.508a3.292 3.292 0 0 1 2.305-.898c.911.052 1.666.378 2.265.977.6.625.912 1.393.938 2.304 0 .886-.312 1.654-.937 2.305L9.023 19.25h4.102c.39.026.599.234.625.625-.026.39-.234.599-.625.625H7.5a.719.719 0 0 1-.586-.39c-.078-.261-.026-.482.156-.665l4.22-4.218a2.05 2.05 0 0 0 .585-1.446c-.026-.573-.221-1.041-.586-1.406-.364-.39-.833-.599-1.406-.625-.547 0-1.016.182-1.406.547'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoLgRegularIcon);
export default ForwardRef;
