import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCameraLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7.773 6.75h4.454c.468 0 .898.143 1.289.43.364.26.625.612.78 1.054l.352 1.016H17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 23.039.026 22.453 0 21.75v-10c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h2.852l.351-1.016.899.313-.899-.313c.156-.442.417-.794.781-1.054.391-.287.82-.43 1.29-.43ZM7.5 8.86l-.547 1.64c-.182.39-.482.599-.898.625H2.5c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-10c-.026-.39-.234-.599-.625-.625h-3.555c-.416-.026-.703-.234-.86-.625l-.546-1.64c-.078-.157-.182-.235-.312-.235H7.773c-.13 0-.22.078-.273.234ZM10 21.124c-.781 0-1.51-.195-2.188-.586a4.298 4.298 0 0 1-1.601-1.602 4.304 4.304 0 0 1-.586-2.187c0-.781.195-1.51.586-2.188.39-.677.924-1.21 1.601-1.601A4.305 4.305 0 0 1 10 12.375c.781 0 1.51.195 2.188.586.677.39 1.21.924 1.601 1.601.39.678.586 1.407.586 2.188 0 .781-.195 1.51-.586 2.188a4.298 4.298 0 0 1-1.601 1.601 4.305 4.305 0 0 1-2.188.586ZM7.5 16.75c.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148-.026-.938-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgBoldIcon);
export default ForwardRef;
