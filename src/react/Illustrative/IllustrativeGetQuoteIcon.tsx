import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeGetQuoteIcon = (
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
    <g>
      <path d='M22.667 2.667H9.333A3.335 3.335 0 0 0 6 6v20a3.335 3.335 0 0 0 3.333 3.333h13.334A3.335 3.335 0 0 0 26 26V6a3.335 3.335 0 0 0-3.333-3.333ZM9.333 4h13.334c1.1 0 2 .9 2 2v7.333H7.333V6c0-1.1.9-2 2-2Zm13.334 24H9.333c-1.1 0-2-.9-2-2V14.667h17.334V26c0 1.1-.9 2-2 2Z' />
      <path d='M14 19.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-1.333v-.667c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666V18h-.666c-.734 0-1.334.6-1.334 1.333v1.334c0 .733.6 1.333 1.334 1.333h2.666v1.333H10c-.367 0-.667.3-.667.667 0 .367.3.667.667.667h1.333v.666c0 .367.3.667.667.667.367 0 .667-.3.667-.667v-.666h.666c.734 0 1.334-.6 1.334-1.334V22c0-.733-.6-1.333-1.334-1.333h-2.666v-1.334H14ZM12.86 11.14c.133.133.3.193.473.193.174 0 .34-.066.474-.193L16 8.947l1.527 1.526c.26.26.68.26.94 0l2.24-2.24c.093.254.333.44.62.44.366 0 .666-.3.666-.666v-1.36a.584.584 0 0 0-.046-.234s-.007-.013-.014-.02a.536.536 0 0 0-.12-.173c-.013-.02-.033-.033-.053-.047a.514.514 0 0 0-.14-.093c-.02-.013-.04-.02-.067-.033A.692.692 0 0 0 21.32 6h-1.333c-.367 0-.667.3-.667.667 0 .286.18.526.433.626L17.987 9.06 16.46 7.533a.664.664 0 0 0-.94 0l-2.193 2.194-2.194-2.194a.664.664 0 1 0-.94.94l2.667 2.667ZM17.333 18h3.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-3.334c-.366 0-.666.3-.666.666 0 .367.3.667.666.667ZM22 19.333h-4.667c-.366 0-.666.3-.666.667 0 .367.3.667.666.667H22c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667ZM17.333 23.333H20c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-2.667c-.366 0-.666.3-.666.667 0 .366.3.666.666.666ZM21.333 24.667h-4c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h4c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeGetQuoteIcon);
export default ForwardRef;
