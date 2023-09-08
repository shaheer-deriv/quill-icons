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
export const StandaloneBarsBoldIcon = (
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
      d='M7.25 9.938c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938Zm0 6.25c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938Zm17.5 6.25c-.052.572-.365.885-.938.937H8.188c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h15.624c.573.052.886.365.938.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsBoldIcon);
export default ForwardRef;
