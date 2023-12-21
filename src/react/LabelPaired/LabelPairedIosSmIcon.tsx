import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedIosSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M9.355 10.969c0 1.258-.628 2.05-1.695 2.05-1.039 0-1.668-.792-1.668-2.05 0-1.258.63-2.051 1.668-2.051 1.067 0 1.695.793 1.695 2.05ZM16 7.605v6.317c0 .492-.027 1.285-.3 1.969-.137.355-.438.847-.876 1.175a3.686 3.686 0 0 1-.984.52c-.465.137-1.012.164-1.695.164H5.828c-.683 0-1.23-.027-1.695-.164a3.687 3.687 0 0 1-.985-.52c-.437-.328-.738-.82-.875-1.175C2 15.207 2 14.414 2 13.92V7.606c0-.492 0-1.285.273-1.968.137-.356.438-.848.875-1.176.274-.219.575-.41.985-.52.465-.136 1.012-.191 1.695-.191h6.317c.683 0 1.23.055 1.695.191.41.137.71.329.984.52.438.328.739.82.875 1.176.274.683.301 1.476.301 1.968ZM4.762 13.512v-3.035h-.63v3.035h.63Zm.027-3.883a.362.362 0 0 0-.355-.356.362.362 0 0 0-.356.356c0 .191.164.355.356.355a.362.362 0 0 0 .355-.355Zm5.223 1.34c0-1.614-.903-2.625-2.352-2.625-1.422 0-2.324 1.011-2.324 2.625 0 1.613.902 2.625 2.324 2.625 1.45 0 2.352-1.012 2.352-2.625Zm4.074 1.094c0-.711-.438-1.149-1.477-1.368l-.574-.136c-.683-.137-.957-.41-.957-.82 0-.52.465-.821 1.121-.821.656 0 1.094.328 1.149.902h.629c-.028-.875-.766-1.476-1.778-1.476-1.039 0-1.777.601-1.777 1.422 0 .738.437 1.203 1.45 1.421l.573.11c.684.164.985.437.985.875 0 .492-.52.848-1.203.848-.711 0-1.23-.329-1.313-.875h-.629c.055.875.82 1.449 1.914 1.449 1.149 0 1.887-.574 1.887-1.531Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIosSmIcon);
export default ForwardRef;
