import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleThreeLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M10 7.375c-1.484 0-2.839.365-4.063 1.094-1.223.703-2.213 1.693-2.968 2.969A8.062 8.062 0 0 0 1.875 15.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094 1.484 0 2.838-.365 4.063-1.094 1.223-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.063c-.755-1.275-1.744-2.265-2.968-2.968-1.225-.73-2.579-1.094-4.063-1.094ZM10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm-2.813-15h5c.417.026.704.221.86.586.13.39.052.742-.235 1.055l-1.992 1.796c.86.105 1.55.47 2.07 1.094.547.6.834 1.328.86 2.188-.026.937-.352 1.705-.977 2.304-.598.625-1.367.951-2.304.977H9.375c-1.25-.026-2.214-.56-2.89-1.602l-.079-.156c-.26-.52-.169-.95.274-1.289.52-.26.95-.156 1.289.313l.117.156c.312.443.742.677 1.289.703h1.094c.39 0 .729-.13 1.015-.39.26-.287.391-.626.391-1.016 0-.417-.143-.756-.43-1.016-.26-.26-.586-.39-.976-.39H8.438c-.417-.027-.704-.222-.86-.586-.13-.391-.052-.743.234-1.055l1.954-1.797H7.187c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeLgBoldIcon);
export default ForwardRef;
