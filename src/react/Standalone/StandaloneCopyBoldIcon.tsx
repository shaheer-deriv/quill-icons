import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCopyBoldIcon = (
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
      d='M23.5 21.5H16c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h5.469c.52 0 .963.182 1.328.547l2.656 2.656c.365.365.547.807.547 1.328V19c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742Zm-15-10h3.75v1.875H8.5c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625H16c.39-.026.599-.234.625-.625v-1.25H18.5V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.5c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24V14c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCopyBoldIcon);
export default ForwardRef;
