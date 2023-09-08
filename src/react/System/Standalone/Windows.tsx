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
export const StandaloneWindowsIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M7.25 10.172v5.937h7.188V9.156L7.25 10.172Zm0 12.656v-5.86h7.188v6.876L7.25 22.828Zm7.969 1.094v-6.953h9.531v8.281l-9.531-1.328Zm0-14.844L24.75 7.75v8.36h-9.531V9.077Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowsIcon);
export default ForwardRef;
