import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M12 7.5c-1.906.031-3.656.5-5.25 1.406-1.594.938-2.875 2.219-3.844 3.844C1.97 14.406 1.5 16.156 1.5 18c0 1.844.469 3.594 1.406 5.25.969 1.625 2.25 2.906 3.844 3.844C8.344 28 10.094 28.469 12 28.5c1.906-.031 3.656-.5 5.25-1.406 1.594-.938 2.875-2.219 3.844-3.844.937-1.656 1.406-3.406 1.406-5.25 0-1.844-.469-3.594-1.406-5.25-.969-1.625-2.25-2.906-3.844-3.844C15.656 8 13.906 7.531 12 7.5ZM12 30c-2.188-.031-4.188-.563-6-1.594C4.187 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.813 1.032-3.813 1.563-6 1.594Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXlRegularIcon);
export default ForwardRef;
