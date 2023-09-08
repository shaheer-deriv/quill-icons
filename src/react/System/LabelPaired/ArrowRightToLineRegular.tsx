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
export const LabelPairedArrowRightToLineRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14 6.5v11c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-11c.02-.313.188-.48.5-.5.313.02.48.188.5.5Zm-3.156 5.844-4 4c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L9.281 12.5H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h8.781L6.156 8.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l4 4c.208.23.208.459 0 .688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineRegularIcon);
export default ForwardRef;
