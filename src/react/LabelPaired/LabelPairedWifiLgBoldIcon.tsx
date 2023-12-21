import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWifiLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M1.563 12.766c-.47.338-.912.312-1.329-.079-.338-.468-.312-.911.078-1.328A18.397 18.397 0 0 1 5.86 7.961C7.943 7.154 10.156 6.75 12.5 6.75c2.344 0 4.557.404 6.64 1.21a18.397 18.397 0 0 1 5.547 3.4c.391.416.417.859.079 1.328-.417.39-.86.416-1.328.078a16.316 16.316 0 0 0-5-3.047c-1.85-.73-3.829-1.094-5.938-1.094-2.11 0-4.089.365-5.938 1.094a16.316 16.316 0 0 0-5 3.047ZM12.5 15.5c-2.578.052-4.766.898-6.563 2.54-.442.364-.885.35-1.328-.04-.338-.469-.312-.912.079-1.328a11.22 11.22 0 0 1 3.554-2.227 11.072 11.072 0 0 1 4.258-.82c1.51 0 2.93.273 4.258.82a11.22 11.22 0 0 1 3.555 2.227c.39.416.416.86.078 1.328-.443.39-.886.404-1.328.04-1.797-1.642-3.985-2.488-6.563-2.54Zm2.188 6.563c-.027.833-.391 1.458-1.094 1.875-.73.416-1.459.416-2.188 0-.703-.417-1.068-1.042-1.094-1.875.027-.834.391-1.459 1.094-1.875.73-.417 1.459-.417 2.188 0 .703.416 1.068 1.041 1.094 1.875Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiLgBoldIcon);
export default ForwardRef;
