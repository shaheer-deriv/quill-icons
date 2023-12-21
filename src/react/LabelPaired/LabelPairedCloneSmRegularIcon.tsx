import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCloneSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M1.75 16.875h6.125a.852.852 0 0 0 .629-.246A.852.852 0 0 0 8.75 16v-1.75h.875V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.902.018 16.492 0 16V9.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52H3.5V9H1.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246ZM6.125 12.5h6.125a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V5.5a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246H6.125a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v6.125c0 .255.082.465.246.629a.852.852 0 0 0 .629.246Zm-1.75-.875V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h6.125c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v6.125c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H6.125c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmRegularIcon);
export default ForwardRef;
