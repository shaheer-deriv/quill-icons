import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleStarSmRegularIcon = (
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
      <path
        fillOpacity={0.72}
        d='M7 4.625a6.303 6.303 0 0 0-3.062.82 6.292 6.292 0 0 0-2.243 2.242 6.124 6.124 0 0 0 0 6.126 6.293 6.293 0 0 0 2.242 2.242c.93.528 1.951.802 3.063.82a6.303 6.303 0 0 0 3.063-.82 6.292 6.292 0 0 0 2.242-2.242 6.124 6.124 0 0 0 0-6.126 6.292 6.292 0 0 0-2.242-2.242A6.303 6.303 0 0 0 7 4.625M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93m.383-10.91 1.012 1.996 2.214.328a.492.492 0 0 1 .356.3.547.547 0 0 1-.11.466l-1.613 1.558.383 2.188a.457.457 0 0 1-.191.437.422.422 0 0 1-.438.028L7 13.1l-1.969 1.04a.47.47 0 0 1-.465-.028.457.457 0 0 1-.191-.437l.383-2.188-1.586-1.586a.4.4 0 0 1-.11-.437.425.425 0 0 1 .329-.3l2.214-.33L6.617 6.84A.387.387 0 0 1 7 6.594c.182 0 .31.082.383.246M6.289 9.438a.502.502 0 0 1-.328.246l-1.559.218 1.121 1.121a.44.44 0 0 1 .137.383l-.273 1.559 1.394-.738a.411.411 0 0 1 .41 0l1.422.738-.273-1.559a.48.48 0 0 1 .11-.383l1.148-1.12-1.559-.22c-.164-.036-.273-.118-.328-.245L7 8.015z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmRegularIcon);
export default ForwardRef;
