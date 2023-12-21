import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTelegramSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7 3.969c1.258.018 2.397.328 3.418.93a6.77 6.77 0 0 1 2.434 2.433c.601 1.02.911 2.16.93 3.418-.019 1.258-.329 2.397-.93 3.418a6.771 6.771 0 0 1-2.434 2.434c-1.02.601-2.16.911-3.418.93-1.258-.019-2.397-.329-3.418-.93a6.77 6.77 0 0 1-2.434-2.434c-.601-1.02-.911-2.16-.93-3.418.019-1.258.329-2.397.93-3.418a6.77 6.77 0 0 1 2.434-2.434c1.02-.601 2.16-.911 3.418-.93Zm3.145 4.62v-.273a.406.406 0 0 0-.11-.191.528.528 0 0 0-.273-.082c-.091 0-.31.064-.657.191-.328.11-.947.356-1.859.739-.656.273-1.978.838-3.965 1.695-.31.128-.474.255-.492.383 0 .182.191.319.574.41.055 0 .11.01.164.027.164.073.347.128.547.164.2.055.365.082.492.082.22.019.465-.063.739-.246 1.84-1.258 2.798-1.896 2.87-1.914.037-.018.083-.009.137.028.037.054.046.09.028.109-.037.091-.237.3-.602.629-.346.346-.665.656-.957.93-.182.145-.282.237-.3.273l-.165.164c-.182.146-.291.292-.328.438-.054.127.055.291.328.492.274.164.52.319.739.465.218.164.483.346.793.546l.218.165c.274.218.556.328.848.328.2.018.356-.21.465-.684l.273-1.559c.11-.62.21-1.23.301-1.832.091-.62.155-1.112.192-1.476Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramSmIcon);
export default ForwardRef;
