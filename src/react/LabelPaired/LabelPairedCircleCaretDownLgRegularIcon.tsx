import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleCaretDownLgRegularIcon = (
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
      <path d='M10 24.25c1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C13.047 7.167 11.588 6.776 10 6.75c-1.589.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C1.64 12.505 1.25 13.963 1.25 15.5s.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.786 1.146 4.375 1.172ZM10 5.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328Zm0 13.75c-.39 0-.716-.143-.977-.43l-3.75-4.023A1.04 1.04 0 0 1 5 14.094c0-.313.104-.573.313-.781a1.06 1.06 0 0 1 .78-.313h7.852c.287 0 .534.104.742.313.209.208.313.468.313.78 0 .261-.091.495-.273.704l-3.75 4.023c-.26.287-.586.43-.977.43Zm.078-1.29 3.438-3.71H6.484l3.438 3.71c.026.027.052.04.078.04.026 0 .052-.013.078-.04Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretDownLgRegularIcon);
export default ForwardRef;
