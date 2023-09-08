import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, SvgSize } from 'types';
const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};
export const LabelPairedFourRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.438 5.719 1.313 14H9V8.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V14h1.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H10v3.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V15H.5a.507.507 0 0 1-.438-.219.531.531 0 0 1 0-.5l4.5-9c.146-.27.365-.343.657-.218.27.166.343.385.218.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourRegularIcon);
export default ForwardRef;
