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
export const StandaloneCheckRegularIcon = (
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
      d='M24.555 10.445c.26.287.26.573 0 .86L13.93 21.93c-.287.26-.573.26-.86 0l-5.625-5.625c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l5.195 5.157 10.195-10.157c.287-.26.573-.26.86 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckRegularIcon);
export default ForwardRef;
