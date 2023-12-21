import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleTrashCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M11.25 9.5a5.403 5.403 0 0 0-.703-2.625 5.394 5.394 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.393 5.393 0 0 0-1.922 1.922A5.403 5.403 0 0 0 .75 9.5c.016.953.25 1.828.703 2.625a5.393 5.393 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.394 5.394 0 0 0 1.922-1.922A5.403 5.403 0 0 0 11.25 9.5ZM0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5Zm3.75-2.625h.96l.282-.258A.312.312 0 0 1 5.25 6.5h1.5c.11 0 .195.04.258.117l.281.258h.961c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-.047l-.281 4.172a.704.704 0 0 1-.234.492.701.701 0 0 1-.516.211H4.828a.701.701 0 0 1-.516-.21.704.704 0 0 1-.234-.493l-.281-4.172H3.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375Zm3.703.75H4.547l.281 4.125h2.344l.281-4.125Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashCaptionRegularIcon);
export default ForwardRef;
