import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAmericanAirlinesIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='url(#b)'
        d='M17.798 15.93 26 25.873h-5.75a4.334 4.334 0 0 1-3.87-2.455l-2.466-4.195.712-2.205 3.172-1.088Z'
      />
      <path
        fill='url(#c)'
        d='M6 6.149c2.173 0 3.581-.334 5.17 1.505l5.19 6.414H12.51a2.873 2.873 0 0 1-2.67-1.616L6 6.149Z'
      />
      <path
        fill='url(#d)'
        d='M14.526 20.292c.373-1.616 3.177-2.952 4.638-2.735l-1.466-1.801-2.423.527-1.586 2.558.837 1.45Z'
      />
      <path
        fill='url(#e)'
        d='m14.467 20.22-1.895-3.2c-.551-.995-.053-2.176 1.966-2.393 2.02-.217 5.531-.559 6.524 1.5-2.733-.28-6.804.55-6.595 4.092Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAmericanAirlinesIcon);
export default ForwardRef;
