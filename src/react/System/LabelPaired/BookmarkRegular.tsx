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
export const LabelPairedBookmarkRegularIcon = (
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
        d='M0 5.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 1.5 4h9c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v13.813c-.042.416-.27.645-.688.687a.582.582 0 0 1-.374-.125L6 16.594l-4.938 3.281A.582.582 0 0 1 .688 20c-.416-.042-.645-.27-.687-.688V5.5ZM1.5 5c-.313.02-.48.188-.5.5v13.219l4.719-3.125a.469.469 0 0 1 .562 0L11 18.719V5.5c-.02-.313-.188-.48-.5-.5h-9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkRegularIcon);
export default ForwardRef;
