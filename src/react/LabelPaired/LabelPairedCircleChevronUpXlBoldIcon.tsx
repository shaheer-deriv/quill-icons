import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleChevronUpXlBoldIcon = (
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
      <path
        fillOpacity={0.72}
        d='M12 8.25c-1.781 0-3.406.438-4.875 1.313-1.469.843-2.656 2.03-3.562 3.562C2.687 14.656 2.25 16.281 2.25 18c0 1.719.438 3.344 1.313 4.875.906 1.531 2.093 2.719 3.562 3.563 1.469.875 3.094 1.312 4.875 1.312 1.781 0 3.406-.437 4.875-1.312 1.469-.844 2.656-2.032 3.563-3.563.875-1.531 1.312-3.156 1.312-4.875 0-1.719-.437-3.344-1.312-4.875-.907-1.531-2.094-2.719-3.563-3.562C15.406 8.687 13.781 8.25 12 8.25M12 30c-2.187-.031-4.187-.562-6-1.594C4.188 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.812 1.032-3.812 1.563-6 1.594m5.672-11.297c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L12 16.219l-4.078 4.078c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l4.875-4.875c.531-.437 1.063-.437 1.594 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronUpXlBoldIcon);
export default ForwardRef;
