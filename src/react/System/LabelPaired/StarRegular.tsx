import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, SvgSize } from 'types';
const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};
export const LabelPairedStarRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.094 9.281c-.167.313-.427.5-.782.563l-4.28.625 3.124 3.094c.23.229.323.52.282.874l-.75 4.344L8.53 16.75a.941.941 0 0 1 .938 0l3.844 2.031-.75-4.343c-.042-.355.052-.646.28-.876l3.126-3.093-4.313-.625a1.033 1.033 0 0 1-.75-.563L9 5.312l-1.906 3.97Zm6.187 10.625L9 17.625l-4.281 2.281c-.271.146-.532.125-.782-.062-.25-.188-.354-.427-.312-.719l.813-4.875-3.47-3.438a.714.714 0 0 1-.187-.75.717.717 0 0 1 .625-.5l4.782-.718 2.125-4.406A.793.793 0 0 1 9 4c.313.02.542.167.688.438l2.124 4.406 4.782.687c.312.063.52.24.625.531a.714.714 0 0 1-.188.75l-3.468 3.438.812 4.875c.042.292-.063.531-.313.719-.25.187-.51.208-.78.062Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarRegularIcon);
export default ForwardRef;
