import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenCircleSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M13.125 10.75a6.303 6.303 0 0 0-.82-3.063 6.293 6.293 0 0 0-2.242-2.242 6.124 6.124 0 0 0-6.126 0 6.292 6.292 0 0 0-2.242 2.242 6.303 6.303 0 0 0-.82 3.063 6.303 6.303 0 0 0 .82 3.063 6.292 6.292 0 0 0 2.242 2.242 6.124 6.124 0 0 0 6.126 0 6.292 6.292 0 0 0 2.242-2.242c.528-.93.802-1.951.82-3.063ZM0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5Zm9.078-2.543c-.219-.164-.428-.164-.629 0l-.574.602 1.094 1.093.574-.601c.164-.2.164-.401 0-.602l-.465-.492ZM5.004 11.68a.344.344 0 0 0-.137.191l-.328 1.34 1.34-.328a.405.405 0 0 0 .191-.11l2.27-2.27L7.246 9.41l-2.27 2.27h.028ZM7.82 7.605c.274-.255.584-.382.93-.382.346 0 .656.127.93.382l.492.465c.255.274.383.584.383.93 0 .346-.128.656-.383.93l-3.473 3.445c-.164.182-.364.3-.601.355l-2.051.52a.393.393 0 0 1-.41-.137.416.416 0 0 1-.11-.41l.493-2.05c.072-.22.19-.42.355-.602L7.82 7.605Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleSmRegularIcon);
export default ForwardRef;
