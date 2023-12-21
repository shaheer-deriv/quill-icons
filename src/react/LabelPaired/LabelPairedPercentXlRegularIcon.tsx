import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPercentXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M3 10.5c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078 0 .438.14.797.422 1.078.281.281.64.422 1.078.422.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078 0-.438-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422ZM3 15c-1.125-.031-1.984-.531-2.578-1.5-.563-1-.563-2 0-3C1.016 9.531 1.875 9.031 3 9c1.125.031 1.984.531 2.578 1.5.563 1 .563 2 0 3-.594.969-1.453 1.469-2.578 1.5Zm12 7.5c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078 0 .438.14.797.422 1.078.281.281.64.422 1.078.422.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078 0-.438-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422Zm0 4.5c-1.125-.031-1.984-.531-2.578-1.5-.563-1-.563-2 0-3 .594-.969 1.453-1.469 2.578-1.5 1.125.031 1.984.531 2.578 1.5.563 1 .563 2 0 3-.594.969-1.453 1.469-2.578 1.5Zm2.766-16.734-16.5 16.5c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l16.5-16.5c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlRegularIcon);
export default ForwardRef;
