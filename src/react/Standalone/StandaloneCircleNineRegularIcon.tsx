import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleNineRegularIcon = (
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
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10-3.75c-.937.026-1.654.443-2.148 1.25-.47.833-.47 1.667 0 2.5.494.807 1.21 1.224 2.148 1.25.938-.026 1.654-.443 2.148-1.25.47-.833.47-1.667 0-2.5-.494-.807-1.21-1.224-2.148-1.25M15.844 19c-1.016-.052-1.862-.43-2.54-1.133-.676-.703-1.028-1.575-1.054-2.617.026-1.068.39-1.953 1.094-2.656.703-.703 1.588-1.068 2.656-1.094 1.068.026 1.953.39 2.656 1.094.703.703 1.068 1.588 1.094 2.656-.026 1.224-.469 2.253-1.328 3.086l-3.242 3.008c-.313.234-.612.221-.899-.04-.234-.312-.221-.611.04-.898z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleNineRegularIcon);
export default ForwardRef;
