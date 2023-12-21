import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPercentSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M2 6.375a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629c0 .255.082.465.246.629A.852.852 0 0 0 2 8.125a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629.852.852 0 0 0-.246-.629A.852.852 0 0 0 2 6.375ZM2 9C1.344 8.982.842 8.69.496 8.125c-.328-.583-.328-1.167 0-1.75C.842 5.81 1.344 5.518 2 5.5c.656.018 1.158.31 1.504.875.328.583.328 1.167 0 1.75C3.158 8.69 2.656 8.982 2 9Zm7 4.375a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629c0 .255.082.465.246.629a.852.852 0 0 0 .629.246.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246ZM9 16c-.656-.018-1.158-.31-1.504-.875-.328-.583-.328-1.167 0-1.75.346-.565.848-.857 1.504-.875.656.018 1.158.31 1.504.875.328.583.328 1.167 0 1.75-.346.565-.848.857-1.504.875Zm1.613-9.762L.988 15.863c-.2.183-.4.183-.601 0-.183-.2-.183-.4 0-.601l9.625-9.625c.2-.183.4-.183.601 0 .183.2.183.4 0 .601Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmRegularIcon);
export default ForwardRef;
