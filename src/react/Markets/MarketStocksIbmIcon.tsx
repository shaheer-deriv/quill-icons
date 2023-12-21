import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksIbmIcon = (
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
        fill='#2665F5'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M8.672 11H4v.69h4.672V11ZM16 11.69a2.67 2.67 0 0 0-1.598-.69H9.25v.69H16ZM17.35 11h3.712l.24.69H17.35V11ZM28 11.69h-3.997l.247-.69H28v.69ZM23.545 12.98H28v-.683h-4.207l-.248.683ZM21.76 12.98h-4.41v-.683h4.17l.24.683ZM16.72 12.98a1.755 1.755 0 0 0-.195-.683H9.25v.683h7.47ZM8.672 12.297H4v.683h4.672v-.683ZM23.335 13.588l-.24.69h3.585v-.69h-3.345ZM21.977 13.588l.24.69h-3.554v-.69h3.314ZM16.652 14.285c.072-.223.105-.456.098-.69h-2.107v.69h2.01ZM7.315 13.595h-2.01v.682h2.01v-.682ZM10.63 13.588h2.002v.69H10.63v-.69ZM20.642 15.02v.525h-1.98v-.69h3.765l.233.645.225-.645h3.795v.69h-1.965v-.525l-.18.525h-3.712l-.18-.525ZM16.383 14.855H10.63v.69h5.182c.229-.195.421-.429.57-.69ZM7.315 14.855h-2.01v.682h2.01v-.682ZM24.715 16.152h1.965v.683h-1.965v-.683ZM20.642 16.152h-1.98v.683h1.98v-.683ZM24.078 16.835c.007 0 .24-.683.24-.683h-3.316l.248.683h2.828ZM10.63 16.152h5.175c.234.2.44.43.615.683h-5.79v-.683ZM7.307 16.152v.683H5.305v-.683h2.002ZM26.68 17.442h-1.965v.683h1.965v-.683ZM18.663 17.442h1.972v.683h-1.973v-.683ZM23.62 18.133s.24-.69.247-.69h-2.384l.247.682 1.89.008ZM10.63 17.442v.683h2.032v-.683H10.63ZM16.705 17.442c.081.222.124.455.128.69H14.68v-.69h2.025ZM5.305 17.442h2.002v.683H5.305v-.683ZM28 18.71h-3.285v.682H28v-.682ZM17.35 18.71h3.292v.682H17.35v-.682ZM23.177 19.392h-1.005l-.24-.682h1.478l-.233.682ZM4 19.392v-.682h4.665v.682H4ZM16.75 18.71a1.5 1.5 0 0 1-.262.682H9.25v-.682h7.5ZM22.63 20.69h.09l.24-.69h-.563l.233.69ZM28 20h-3.285v.69H28V20ZM9.25 20v.69h5.01c.647 0 1.27-.246 1.74-.69H9.25ZM20.642 20H17.35v.69h3.292V20ZM8.665 20.69v-.683L4 20v.69h4.665Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksIbmIcon);
export default ForwardRef;
