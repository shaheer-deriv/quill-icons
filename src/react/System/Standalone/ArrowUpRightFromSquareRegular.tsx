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
export const StandaloneArrowUpRightFromSquareRegularIcon = (
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
      d='M19.125 6.5h6.25c.39.026.599.234.625.625v6.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.648l-9.57 9.532c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l9.532-9.57h-4.727c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625ZM8.5 9h5.625c.39.026.599.234.625.625-.026.39-.234.599-.625.625H8.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V24c0 .365.117.664.352.898.234.235.533.352.898.352H21c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-5.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.5c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24V11.5c.026-.703.273-1.29.742-1.758C7.211 9.273 7.797 9.026 8.5 9Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightFromSquareRegularIcon);
export default ForwardRef;
