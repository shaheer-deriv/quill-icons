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
export const StandaloneForwardStepRegularIcon = (
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
      d='M19.75 9.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5.313l-6.992 5.704a.985.985 0 0 1-.664.234 1.06 1.06 0 0 1-.781-.313 1.06 1.06 0 0 1-.313-.78V10.093c0-.313.104-.573.313-.781a1.06 1.06 0 0 1 .78-.313c.261 0 .482.078.665.234l6.992 5.704V9.625Zm-7.5.82v12.11l7.46-6.055-7.46-6.055Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepRegularIcon);
export default ForwardRef;
