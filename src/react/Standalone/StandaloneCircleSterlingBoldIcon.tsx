import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleSterlingBoldIcon = (
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
    <path d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.063-.703-1.223-1.692-2.213-2.968-2.968A8.062 8.062 0 0 0 16 8.375a8.062 8.062 0 0 0-4.063 1.094c-1.275.755-2.265 1.745-2.968 2.969-.73 1.223-1.094 2.578-1.094 4.062 0 1.484.365 2.838 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm10.234-3.75c-.338 0-.625.117-.859.352-.234.234-.352.52-.352.859v1.289h1.602c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-1.563v.39c0 .73-.13 1.433-.39 2.11h4.14c.573.052.886.365.938.938-.052.572-.365.885-.938.937h-5.625a.873.873 0 0 1-.78-.43c-.183-.312-.196-.625-.04-.937l.352-.742a3.853 3.853 0 0 0 .469-1.875V16.5h-.313c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.313l-.04-1.29c.027-.885.326-1.614.899-2.187.573-.572 1.302-.872 2.187-.898.391 0 .769.078 1.133.234l1.172.47c.52.26.69.663.508 1.21-.26.495-.664.664-1.211.508l-1.172-.469a1.368 1.368 0 0 0-.43-.078Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSterlingBoldIcon);
export default ForwardRef;
