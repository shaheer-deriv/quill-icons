import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeSpreadsIcon = (
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
    <g fillOpacity={0.72}>
      <path d='M19.375 6.013a.664.664 0 0 0-.94 0L15.288 9.16a.664.664 0 0 0 .474 1.133c.173 0 .34-.066.473-.193l3.147-3.147c.26-.26.26-.68 0-.94zM15.755 7.267a.788.788 0 0 0 .787-.787.788.788 0 0 0-.787-.787.788.788 0 0 0-.787.787c0 .433.354.787.787.787M18.902 8.847a.788.788 0 0 0-.787.786c0 .434.353.787.787.787a.788.788 0 0 0 .786-.787.788.788 0 0 0-.786-.786' />
      <path d='M20.715 13.447c1.1 0 2-.9 2-2v-6.78c0-1.1-.9-2-2-2h-6.78c-1.1 0-2 .9-2 2v6.78c0 1.1.9 2 2 2h1.547v1.693c0 .267.16.513.413.613a.664.664 0 0 0 .727-.14l2.166-2.166zm-2.673-1.14-1.22 1.22v-.754c0-.366-.3-.666-.667-.666h-2.213a.669.669 0 0 1-.667-.667V4.667c0-.367.3-.667.667-.667h6.78c.366 0 .666.3.666.667v6.78c0 .366-.3.666-.666.666h-2.2a.688.688 0 0 0-.474.194zM25.528 24.333a.664.664 0 1 0-.94.94l3.48 3.48c.134.134.3.194.474.194a.664.664 0 0 0 .473-1.133l-3.48-3.48z' />
      <path d='M20.942 23.82a.66.66 0 0 0-.474-.193.688.688 0 0 0-.473.193l-1.247 1.247a.196.196 0 0 1-.22.046c-.06-.026-.126-.073-.126-.186v-6.794h6.793c.113 0 .167.067.187.127.026.053.033.14-.047.22l-1.247 1.247a.66.66 0 0 0-.193.473c0 .18.073.347.193.473l4.094 4.094a.664.664 0 1 0 .94-.94l-3.627-3.62.773-.774a1.533 1.533 0 0 0-1.087-2.62h-7.46c-.366 0-.666.3-.666.667v7.46c0 .62.373 1.18.947 1.42a1.53 1.53 0 0 0 1.673-.333l.773-.774 3.62 3.627c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-4.093-4.093zM6.462 18.72c.133.133.3.193.473.193s.34-.066.473-.193c.26-.26.26-.68 0-.94l-3.48-3.48a.664.664 0 1 0-.94.94l3.48 3.48z' />
      <path d='M13.968 16.713a1.53 1.53 0 0 0-1.673.334l-.773.773-3.627-3.62a.664.664 0 1 0-.94.94l4.093 4.093c.26.26.68.26.94 0l1.247-1.246c.08-.08.16-.067.22-.047.06.027.127.073.127.187v6.793H6.788c-.113 0-.16-.067-.186-.127-.027-.053-.034-.14.046-.22l1.247-1.246c.26-.26.26-.68 0-.94l-4.093-4.094a.664.664 0 1 0-.94.94l3.626 3.627-.773.773a1.534 1.534 0 0 0 1.087 2.62h7.46c.366 0 .666-.3.666-.666v-7.46c0-.62-.373-1.18-.946-1.42z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSpreadsIcon);
export default ForwardRef;
