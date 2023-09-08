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
export const StandaloneArrowDownRegularIcon = (
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
      d='M15.57 25.055 8.695 18.18c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l5.82 5.782V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v14.727l5.82-5.782c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-6.875 6.875c-.287.26-.573.26-.86 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRegularIcon);
export default ForwardRef;
