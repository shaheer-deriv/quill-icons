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
export const StandaloneSignalRegularIcon = (
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
      d='M26.625 7.125v18.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM21 10.25c.39.026.599.234.625.625v15c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-15c.026-.39.234-.599.625-.625Zm-4.375 4.375v11.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-11.25c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM11 17.75c.39.026.599.234.625.625v7.5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-7.5c.026-.39.234-.599.625-.625ZM6 21.5c.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-3.75c.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalRegularIcon);
export default ForwardRef;
