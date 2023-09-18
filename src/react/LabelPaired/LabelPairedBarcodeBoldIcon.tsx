import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 5c.458.042.708.292.75.75v12.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V5.75c.042-.458.292-.708.75-.75ZM3.5 5c.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13c.02-.313.188-.48.5-.5Zm2.25 0c.458.042.708.292.75.75v12.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V5.75c.042-.458.292-.708.75-.75Zm3.5 0c.458.042.708.292.75.75v12.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V5.75c.042-.458.292-.708.75-.75Zm5.25.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v12.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V5.75Zm-2-.25c.02-.313.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeBoldIcon);
export default ForwardRef;
