import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTabletSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.063c-.273.018-.42.164-.437.437V16c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438V5.5c-.019-.273-.165-.42-.438-.437zM.375 5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23zm5.25 9.188h1.75c.273.018.42.164.438.437-.019.273-.165.42-.438.438h-1.75c-.273-.019-.42-.165-.437-.438.018-.273.164-.42.437-.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletSmBoldIcon);
export default ForwardRef;
