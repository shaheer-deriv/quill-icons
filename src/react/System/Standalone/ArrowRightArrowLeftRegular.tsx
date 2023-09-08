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
export const StandaloneArrowRightArrowLeftRegularIcon = (
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
      d='m24.555 11.93-3.75 3.75c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l2.657-2.695H7.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h14.727L19.945 8.18c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l3.75 3.75c.26.287.26.573 0 .86Zm-13.36 13.75-3.75-3.75c-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-2.657 2.695h14.727c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.398l2.657 2.695c.26.287.26.573 0 .86-.287.26-.573.26-.86 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightArrowLeftRegularIcon);
export default ForwardRef;
