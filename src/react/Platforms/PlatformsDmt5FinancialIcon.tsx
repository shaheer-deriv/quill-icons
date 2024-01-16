import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const PlatformsDmt5FinancialIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#8ce6ed4f048ab753465f638dc93e8a84__a)'>
      <path fill='#0364B9' d='M26 0H6a6 6 0 0 0-6 6v17.5h32V6a6 6 0 0 0-6-6' />
      <path
        fill='#0A559E'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.976 5.976 0 0 0 26 0zM32 6c0-1.504-.553-2.88-1.468-3.933L26.602 23.5H32z'
      />
      <path fill='#71BD0E' d='M0 23h32v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' />
      <path
        fill='#fff'
        d='M7.342 9.684c.144.264.308.592.492.984.192.384.388.804.588 1.26.208.448.412.908.612 1.38l.564 1.332.564-1.332c.2-.472.4-.932.6-1.38.208-.456.404-.876.588-1.26.192-.392.36-.72.504-.984h1.704c.08.552.152 1.172.216 1.86.072.68.132 1.392.18 2.136.056.736.104 1.476.144 2.22.048.744.088 1.444.12 2.1h-1.824c-.024-.808-.056-1.688-.096-2.64-.04-.952-.1-1.912-.18-2.88a517.564 517.564 0 0 1-1.008 2.34 108.944 108.944 0 0 1-.9 2.124H8.902c-.112-.264-.248-.58-.408-.948-.16-.376-.328-.768-.504-1.176-.168-.408-.34-.816-.516-1.224l-.48-1.116c-.08.968-.14 1.928-.18 2.88-.04.952-.072 1.832-.096 2.64H4.894c.032-.656.068-1.356.108-2.1l.144-2.22c.056-.744.116-1.456.18-2.136.072-.688.148-1.308.228-1.86zM21.355 9.684v1.596h-2.508V18h-1.872v-6.72h-2.508V9.684zM25.318 15.552a1.18 1.18 0 0 0-.156-.612c-.104-.184-.284-.336-.54-.456-.256-.12-.6-.212-1.032-.276a11.46 11.46 0 0 0-1.632-.096c.088-.744.16-1.5.216-2.268.056-.768.1-1.488.132-2.16h4.5v1.5h-3c-.016.288-.036.568-.06.84-.016.264-.036.496-.06.696 1.168.08 2.028.356 2.58.828.56.464.84 1.112.84 1.944 0 .384-.068.74-.204 1.068-.136.328-.34.612-.612.852a2.9 2.9 0 0 1-1.032.564c-.408.136-.888.204-1.44.204-.216 0-.444-.016-.684-.048a6.41 6.41 0 0 1-.684-.108 7.294 7.294 0 0 1-.588-.132 2.309 2.309 0 0 1-.408-.144l.324-1.476c.2.088.464.176.792.264.328.08.72.12 1.176.12.552 0 .952-.108 1.2-.324.248-.224.372-.484.372-.78M11.54 29.58V25.42h2.784v.786h-1.848v.87h1.644v.786h-1.644v1.716zM14.986 25.421h.935v4.158h-.935zM19.674 29.58a20.923 20.923 0 0 0-.87-1.41 14.33 14.33 0 0 0-.996-1.315v2.724h-.924v-4.158h.762c.132.132.278.294.438.486.16.192.322.398.486.618.168.216.334.442.498.678.164.232.318.456.462.672v-2.454h.93v4.158z'
      />
    </g>
    <defs>
      <clipPath id='8ce6ed4f048ab753465f638dc93e8a84__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PlatformsDmt5FinancialIcon);
export default ForwardRef;
