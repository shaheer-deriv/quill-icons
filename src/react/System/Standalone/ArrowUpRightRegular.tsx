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
export const StandaloneArrowUpRightRegularIcon = (
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
      d='M21.625 10.25c.39.026.599.234.625.625v8.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-7.227L10.805 22.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L20.102 11.5h-7.227c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h8.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightRegularIcon);
export default ForwardRef;
