import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M12.688 10.75c0-1.04-.256-1.987-.766-2.844a5.68 5.68 0 0 0-2.078-2.078A5.643 5.643 0 0 0 7 5.062c-1.003 0-1.95.256-2.844.766a5.68 5.68 0 0 0-2.078 2.078 5.452 5.452 0 0 0-.765 2.844c0 1.04.255 1.987.765 2.844.492.857 1.185 1.55 2.078 2.078.893.51 1.841.765 2.844.765s1.95-.255 2.844-.765c.893-.529 1.586-1.222 2.078-2.078.51-.857.765-1.805.765-2.844M0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSmBoldIcon);
export default ForwardRef;
