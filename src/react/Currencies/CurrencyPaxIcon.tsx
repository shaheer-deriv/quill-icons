import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyPaxIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#F2F3F4'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#0293D6'
        d='M9.785 23.4a7.149 7.149 0 0 0 4.953 2.42 4.503 4.503 0 0 0 2.984-1.35 51.92 51.92 0 0 1 4.897-3.715l.957-.394c.394-.17 1.07-.563 1.689-1.295.675-.9.788-1.858.788-2.195a6.192 6.192 0 0 0-1.014-2.984A18.688 18.688 0 0 1 9.785 23.4Z'
      />
      <path
        fill='#EBE638'
        d='M11.924 7.414a4.503 4.503 0 0 1 3.265-1.407 2.927 2.927 0 0 1 2.139.731 9.795 9.795 0 0 0 5.516 1.802c.507.056 1.52.225 2.195 1.07.507.675.563 1.406.563 1.744a7.824 7.824 0 0 1-.563 2.533L11.924 7.414Z'
      />
      <path
        fill='#BAD147'
        d='M9.785 23.4c-.507-.056-1.182-.225-1.97-.563-.789-.337-1.745-.731-2.365-1.8-.394-.676-.45-1.352-.45-1.802a7.768 7.768 0 0 1 .844-3.434 15.875 15.875 0 0 0 1.07-4.11l.281-1.125c.17-.563.282-1.126.676-1.689l.619-.675a5.348 5.348 0 0 1 3.434-.788A17.563 17.563 0 0 0 9.784 23.4Z'
      />
      <path
        fill='#78B650'
        d='M11.924 7.414c-.057 0 3.04.169 4.953.844l1.576.676c-.619-.057-4.56-.226-7.542 2.758-3.772 3.828-2.534 9.063-2.477 9.344a5.742 5.742 0 0 1-1.239-3.884 13.51 13.51 0 0 1 4.729-9.738Z'
      />
      <path
        fill='#2F8260'
        d='M19.467 21.318a11.258 11.258 0 0 0-1.014-12.384 7.712 7.712 0 0 1 4.279 2.251c.675.563 1.52 1.407 2.307 2.702a16.606 16.606 0 0 1-5.572 7.43Z'
      />
      <path
        fill='#085229'
        d='M21.268 11.41c-.9-1.52-2.195-2.195-2.758-2.476-.45-.113-4.672-.788-7.881 2.308-2.59 2.476-2.758 5.685-2.758 6.304A9.626 9.626 0 0 0 9.897 23.4c1.674.323 3.393.323 5.066 0 .845-.169 2.815-.506 4.504-1.97.225-.225 2.702-2.533 2.87-6.192 0-.619 0-2.195-1.07-3.828Zm-2.027 8.163a5.572 5.572 0 0 1-4.109 1.8c-.338 0-2.59-.055-4.165-1.913-.225-.282-1.351-1.633-1.295-3.659.113-2.702 2.252-4.278 2.702-4.616.394-.281 1.351-.9 2.758-.957.338-.056 1.52-.112 2.702.563 2.59 1.407 2.702 4.785 2.702 5.01 0 .62 0 2.308-1.295 3.772Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyPaxIcon);
export default ForwardRef;
