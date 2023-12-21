import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMoonSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M4.215 6.457A4.724 4.724 0 0 0 2.3 8.18c-.474.765-.72 1.622-.739 2.57.037 1.367.502 2.497 1.395 3.39.911.912 2.042 1.386 3.39 1.422.365 0 .72-.036 1.067-.109a6.076 6.076 0 0 1-2.953-2.215c-.747-1.02-1.13-2.215-1.149-3.582 0-1.185.301-2.251.903-3.199ZM5.91 4.652c.055 0 .119-.009.192-.027h.492c.09 0 .182.01.273.027.219.037.356.146.41.328.037.22-.036.383-.218.493a1.088 1.088 0 0 0-.274.164c-.11.073-.219.155-.328.246H6.43l-.055.054A4.899 4.899 0 0 0 5.09 7.579a4.693 4.693 0 0 0-.465 2.078c.036 1.367.501 2.498 1.395 3.39.893.912 2.023 1.386 3.39 1.423h.11c.145 0 .282-.01.41-.028.11-.018.21-.027.3-.027.22-.036.374.037.465.219.091.182.064.355-.082.52a2.047 2.047 0 0 0-.218.19c-.11.11-.237.21-.383.302l-.055.054a.318.318 0 0 1-.082.055c-1.02.73-2.188 1.103-3.5 1.121-1.148-.018-2.178-.3-3.09-.848a5.73 5.73 0 0 1-2.187-2.187c-.547-.912-.83-1.942-.848-3.09.036-1.659.583-3.053 1.64-4.184 1.058-1.13 2.398-1.768 4.02-1.914Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmBoldIcon);
export default ForwardRef;
