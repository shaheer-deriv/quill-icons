import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileChartColumnLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M1.875 23c.026.39.234.599.625.625h10c.39-.026.599-.234.625-.625V11.75H10c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V7.375H2.5c-.39.026-.599.234-.625.625v15ZM2.5 5.5h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm5.938 10.938v5c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-5c.053-.572.365-.885.938-.937.573.052.885.365.938.938Zm3.437 1.25v3.75c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-3.75c.052-.572.365-.885.938-.937.572.052.885.365.937.938ZM5 18.938v2.5c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-2.5c.052-.572.365-.885.938-.937.572.052.885.365.937.938Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnLgBoldIcon);
export default ForwardRef;
