import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRectangleAdSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M1.875 5.938c-.273.018-.42.164-.438.437v8.75c.019.273.165.42.438.438h12.25c.273-.019.42-.165.438-.438v-8.75c-.019-.273-.165-.42-.438-.438H1.875Zm-1.75.437c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h12.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.875c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75Zm6.29 2.105 1.968 3.938c.127.383.027.684-.301.902-.383.128-.674.028-.875-.3l-.164-.301H4.582l-.164.3c-.2.329-.492.42-.875.274-.346-.2-.438-.492-.273-.875L5.238 8.48c.128-.237.32-.355.574-.355.274 0 .474.118.602.355Zm-.603 1.778-.574 1.148h1.149l-.574-1.148Zm5.032.492c-.401.037-.62.255-.656.656.036.401.255.62.656.656.4-.036.62-.255.656-.656-.037-.4-.255-.62-.656-.656Zm.656-1.203V8.78c.037-.4.255-.62.656-.656.401.036.62.255.656.656V12.72c-.036.4-.255.62-.656.656a.633.633 0 0 1-.465-.191 1.869 1.869 0 0 1-.847.191c-.565-.018-1.03-.21-1.395-.574-.364-.365-.556-.83-.574-1.395.018-.565.21-1.03.574-1.394.365-.365.83-.556 1.395-.575.237 0 .456.037.656.11Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmBoldIcon);
export default ForwardRef;
