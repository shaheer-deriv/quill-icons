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
export const StandaloneCheckBoldIcon = (
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
      d='M24.477 10.523c.364.443.364.886 0 1.329L14.164 22.164c-.443.365-.885.365-1.328 0l-5.313-5.312c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0l4.648 4.649 9.648-9.649c.443-.364.886-.364 1.329 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckBoldIcon);
export default ForwardRef;
