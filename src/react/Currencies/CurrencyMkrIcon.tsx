import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyMkrIcon = (
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
    <g clipPath='url(#0ea077871d299b3c8a6df21e834db6b2__a)'>
      <path
        fill='#0090FF'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#0ea077871d299b3c8a6df21e834db6b2__b)'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M9.25 19.206v-6.44l4.883 3.676v2.764h1.246v-3.024a.727.727 0 0 0-.29-.58l-5.922-4.458a.73.73 0 0 0-1.165.582v7.48zm13.505 0v-6.44l-4.883 3.676v2.764h-1.247v-3.024a.727.727 0 0 1 .29-.58l5.922-4.456a.73.73 0 0 1 1.165.58v7.48z'
      />
    </g>
    <defs>
      <linearGradient
        id='0ea077871d299b3c8a6df21e834db6b2__b'
        x1={16}
        x2={16}
        y1={0}
        y2={32}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4FA89B' />
        <stop offset={1} stopColor='#6ACEBB' />
      </linearGradient>
      <clipPath id='0ea077871d299b3c8a6df21e834db6b2__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyMkrIcon);
export default ForwardRef;
