import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M12.164 14.836c.365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l6.836-6.836-6.836-6.836c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0z' />
    </g>
    <defs>
      <clipPath id='f1d57a145cf8b0fded3a56aefeef0646__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgBoldIcon);
export default ForwardRef;
